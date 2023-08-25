"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SelectInput } from "../form";

type Props = {};

const AdminEditProfile = (props: Props) => {
  const [preview, setPreview] = useState("");
  const [imgFile, setImgFile] = useState();
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    phonenumber: "",
    state: "",
    country: "",
    blood_group: "",
    age: "",
    genotype: "",
    medical_history: "",
  });

  const handleUpload = (event) => {
    setImgFile(event.target.files[0]);
  };

  useEffect(() => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setPreview(reader.result);
    });
    if (imgFile) {
      reader.readAsDataURL(imgFile);
    }
    return () => {
      reader.removeEventListener("load", () => {
        setPreview("");
      });
    };
  }, [imgFile]);

  const handleOnChange = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const inputData = { ...values, image: imgFile };
    // const newData = filteredInput(inputData);
    // const response = await axiosPrivate.patch(`/patient/`, newData);
    // if (response.status === 200) {
    //   mutate();
    //   toast.success("Profile successfully updated ");
    //   setUpdateModal(false);
    //   navigate("/dashboard/profile");
    // }
  };

  const goBack = () => {
    // setUpdateModal(false);
    // navigate("/dashboard/profile");
  };

  //   if (isLoading) {
  //     return <h1>Loading....</h1>;
  //   }

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full lg:w-[90%] relative overflow-scroll h-full">
        <div className="flex w-full flex-col items-center lg:flex-row lg:justify-between sticky top-0 px-2 ">
          <div className="w-full lg:w-[60%]"></div>
          <div className="w-full lg:w-[15%] flex items-center mt-2 justify-between">
            <button
              onClick={() => goBack()}
              type="button"
              className="p-2 border border-black border-primary rounded-md text-primary text-xs lg:text-[1rem]"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              type="button"
              className="p-2 border border-black border-primary bg-primary text-white rounded-md text-xs lg:text-[1rem]"
            >
              Save
            </button>
          </div>
        </div>
        <div className="w-full mt-4 flex flex-col lg:flex-row lg:justify-between gap-4 ">
          <div className="w-full flex items-center lg:items-baseline justify-center lg:w-[30%] lg:py-8">
            <div className="h-[10rem] w-[10rem] lg:h-[15rem] lg:w-[15rem] border border-yellow-500 rounded-[50%] relative overflow-hidden">
              <Image src={""} alt="" className="h-full w-full" />
            </div>
          </div>

          <div className="w-full lg:w-[60%] dark:text-white  p-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col lg:flex-row gap-4">
                <p className="text-primary font-medium text-[1.2rem]">Yayi</p>
                <p className="text-primary font-medium text-[1.2rem]">
                  Abiodun
                </p>
              </div>
              <div className="">
                <p className="text-primary font-medium text-[1.2rem]">
                  your@gmail.com
                </p>
              </div>
              <div className="w-full flex flex-col lg:flex-row gap-2 lg:justify-between">
                <div className="lg:w-[45%] w-full">
                  <SelectInput
                    className="dark:text-white dark:border-white"
                    placeholder="Active User"
                    options={["Yes", "No"]}
                    label="Active"
                  />
                </div>
                <div className="lg:w-[45%] w-full">
                  <SelectInput
                    className="dark:text-white dark:border-white"
                    placeholder="Gender"
                    options={["Male", "Female"]}
                    label="Gender"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col lg:flex-row gap-2 lg:justify-between lg:flex-wrap"></div>
              <div className="">
                <div className="w-full flex flex-col lg:flex-row gap-2 lg:justify-between lg:flex-wrap">
                  <SelectInput
                    className="dark:text-white w-full lg:w-[45%] dark:border-white"
                    placeholder="Status"
                    options={["Admin", "Client"]}
                    label="Status"
                  />
                  <SelectInput
                    className="dark:text-white w-full lg:w-[45%]  dark:border-white"
                    placeholder="Pricing Plan"
                    options={["Free", "Starter", "Professional"]}
                    label="subscription"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminEditProfile;
