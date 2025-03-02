import { getCompanies } from "@/api/apiCompanies";
import { addNewJob } from "@/api/apiJobs";
import AddCompanyDrawer from "@/components/add-company-drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import useFetch from "@/hooks/use-fetch";
import { useUser } from "@clerk/clerk-react";
import { zodResolver } from "@hookform/resolvers/zod";
import MDEditor from "@uiw/react-md-editor";
import { State } from "country-state-city";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { BarLoader } from "react-spinners";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  location: z.string().min(1, { message: "Select a location" }),
  company_id: z.string().min(1, { message: "Select or Add a new Company" }),
  requirements: z.string().min(1, { message: "Requirements are required" }),
});

const PostJob = () => {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: { location: "", company_id: "", requirements: "" },
    resolver: zodResolver(schema),
  });

  const {
    loading: loadingCreateJob,
    error: errorCreateJob,
    data: dataCreateJob,
    fn: fnCreateJob,
  } = useFetch(addNewJob);

  const onSubmit = (data) => {
    fnCreateJob({
      ...data,
      recruiter_id: user.id,
      isOpen: true,
    });
  };

  useEffect(() => {
    if (dataCreateJob?.length > 0) navigate("/jobs");
  }, [loadingCreateJob]);

  const {
    loading: loadingCompanies,
    data: companies,
    fn: fnCompanies,
  } = useFetch(getCompanies);

  useEffect(() => {
    if (isLoaded) {
      fnCompanies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded]);

  if (!isLoaded || loadingCompanies) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-1/2 max-w-md">
          <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />
          <p className="text-center text-gray-500 mt-2 animate-pulse">Loading...</p>
        </div>
      </div>
    );
  }

  if (user?.unsafeMetadata?.role !== "recruiter") {
    return <Navigate to="/jobs" />;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-md p-8 mb-8">
        <h1 className="gradient-title font-extrabold text-5xl sm:text-7xl text-center pb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
          Post a Job
        </h1>
        
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium text-gray-700">Job Title</label>
            <Input 
              id="title"
              placeholder="Enter a descriptive job title" 
              className="rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
              {...register("title")} 
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium text-gray-700">Job Description</label>
            <Textarea 
              id="description"
              placeholder="Describe the job role, responsibilities, and benefits" 
              className="rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 min-h-32"
              {...register("description")} 
            />
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="location" className="text-sm font-medium text-gray-700">Job Location</label>
              <Controller
                name="location"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger id="location" className="rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent className="max-h-60">
                      <SelectGroup>
                        {State.getStatesOfCountry("IN").map(({ name }) => (
                          <SelectItem key={name} value={name}>
                            {name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Company</label>
              <div className="flex gap-2">
                <Controller
                  name="company_id"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange} className="flex-1">
                      <SelectTrigger className="rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200">
                        <SelectValue placeholder="Select company">
                          {field.value
                            ? companies?.find((com) => com.id === Number(field.value))
                                ?.name
                            : "Select company"}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent className="max-h-60">
                        <SelectGroup>
                          {companies?.map(({ name, id }) => (
                            <SelectItem key={name} value={id}>
                              {name}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
                <AddCompanyDrawer fetchCompanies={fnCompanies} />
              </div>
              {errors.company_id && <p className="text-red-500 text-sm mt-1">{errors.company_id.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="requirements" className="text-sm font-medium text-gray-700">Job Requirements</label>
            <div className="border rounded-md overflow-hidden">
              <Controller
                name="requirements"
                control={control}
                render={({ field }) => (
                  <MDEditor 
                    value={field.value} 
                    onChange={field.onChange}
                    preview="edit"
                    height={200}
                  />
                )}
              />
            </div>
            {errors.requirements && <p className="text-red-500 text-sm mt-1">{errors.requirements.message}</p>}
          </div>

          {errorCreateJob?.message && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-500 text-sm">{errorCreateJob?.message}</p>
            </div>
          )}
          
          {loadingCreateJob && (
            <div className="py-4 flex justify-center">
              <BarLoader width={"50%"} color="#36d7b7" />
            </div>
          )}
          
          <Button 
            type="submit" 
            variant="blue" 
            size="lg" 
            className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Post Job
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PostJob;