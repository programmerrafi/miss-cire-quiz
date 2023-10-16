import Image from "next/image";
import { useEffect, useState } from "react";
import React from "react";
import Button from "../shared/Button";
import { BsCheckCircleFill } from "react-icons/bs";
import ContactForm from "./SignUpForm/ContactForm";
import ProfileForm from "./SignUpForm/ProfileForm";
import Agreement from "./SignUpForm/Agreement";
import ChooseAccount from "./ChooseAccount";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { RiCloseFill } from "react-icons/ri";
import ChooseHeader from "./ChooseHeader";
import CompanyDetails from "./SignUpForm/CompanyDetails";
import ProgressBar from "./ProgressBar";

function SignUp() {
  const [progress, setProgress] = useState(0);
  const [goingNext, setGoingNext] = useState(false);
  const [selectAccountType, setSelectAccountType] = useState({
    title: "Esthetician/Cosmologist",
  });
  const [active, setActive] = useState(1);
  const [user, setUser] = useState(null);
  const [xAuthToken, setXAuthToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [opened, setOpened] = useState(false);
  const [openedMonth, setOpenedMonth] = useState(false);
  const [openedIssue, setOpenedIssue] = useState(false);
  const [openedValueType, setOpenedValueType] = useState(false);
  const [error, setError] = useState(null);
  const [contactInput, setContactInput] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    pass: "",
    confirmPass: "",
  });
  const [companyDetails, setCompanyDetails] = useState({
    companyName: "",
    address: "",
    city: "",
    zip: "",
    state: "",
    country: "United States",
  });
  // console.log(companyDetails);
  const [profileFrom, setProfileFrom] = useState({
    licenseNum: "",
    valueType: "",
    issueValue: "",
    expDate: "",
    month: "",
    year: "",
  });

  const dispatch = useDispatch();
  const router = useRouter();

  const nextStep = () =>
    setActive((current) => (current < 4 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 1 ? current - 1 : current));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (active === 1) {
      nextStep();
      setProgress(50);
    }
    const createData = {
      store_id: 1,
      phone: contactInput.phone,
      name: contactInput.name,
      email: contactInput.email,
      handle: contactInput.profile,
      address_json: {
        address: contactInput.address,
        address2: null,
        company: null,
        city: contactInput.city,
        state: contactInput.state,
        zip: contactInput.zip,
        country: contactInput.country,
        zone: null,
        area: null,
      },
    };
    if (active === 2) {
      companyDetails.state === "" ? setOpened(true) : setOpened(false);
      if (companyDetails.state === "") return;
      nextStep();
      setProgress(75);
      // setLoading(true);
      // const res = await fetch(`${process.env.APP_API_URL}/influencers/create`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(createData),
      // })
      //   .then((response) => response.json())
      //   .then((data) => {
      //     console.log(data);
      //     if (data.status === 200) {
      //       setError(null);
      //       setUser(data);
      //       setXAuthToken(data?.access_token);
      //       // localStorage.setItem("x_auth_token_user", data?.access_token);
      //       nextStep();
      //       setLoading(false);
      //     } else {
      //       // alert(data.message);
      //       setError(data.message);
      //       console.log(data.message);
      //       setLoading(false);
      //     }
      //   })
      //   .catch((error) => {
      //     console.error("Error:", error);
      //   });
    }
    // if (active === 2 || active === 3) {
    if (active === 3) {
      profileFrom.valueType === ""
        ? setOpenedValueType(true)
        : setOpenedValueType(false);
      if (profileFrom.valueType === "") return;
      profileFrom.issueValue === ""
        ? setOpenedIssue(true)
        : setOpenedIssue(false);
      if (profileFrom.issueValue === "") return;
      profileFrom.month === "" ? setOpenedMonth(true) : setOpenedMonth(false);
      if (profileFrom.month === "") return;
      if (profileFrom.expDate >= 1 && profileFrom.expDate <= 31) {
        setError(null);
      } else {
        setError("Please enter valid Expiration Day: Between 1 to 31");
        return;
      }
      const currentYear = new Date().getFullYear();
      if (
        Number(profileFrom.year) >= Number(currentYear) &&
        Number(profileFrom.year) <= 2099
      ) {
        setError(null);
      } else {
        setError(
          `Please enter valid Expiration Year: Between ${currentYear} to 2099`
        );
        return;
      }

      nextStep();
      setProgress(100);

      // setLoading(true);
      // const profileData = {
      //   influencer_id: user?.user?.influencer_id
      //     ? user.user.influencer_id
      //     : user?.influencer?.influencer_id,
      //   store_id: 1,
      //   phone: contactInput.phone ? contactInput.phone : user?.user?.phone,
      //   name: contactInput.name ? contactInput.name : user?.user?.name,
      //   email: contactInput.email ? contactInput.email : user?.user?.email,
      //   handle: contactInput.profile
      //     ? contactInput.profile
      //     : user?.user?.handle,
      //   address_json: {
      //     address: contactInput.address
      //       ? contactInput.address
      //       : user?.user?.address_json?.address,
      //     address2: null,
      //     company: null,
      //     city: contactInput.city
      //       ? contactInput.city
      //       : user?.user?.address_json?.city,
      //     state: contactInput.state
      //       ? contactInput.state
      //       : user?.user?.address_json?.state,
      //     zip: contactInput.zip
      //       ? contactInput.zip
      //       : user?.user?.address_json?.zip,
      //     country: contactInput.country
      //       ? contactInput.country
      //       : user?.user?.address_json?.country,
      //     zone: null,
      //     area: null,
      //   },
      //   license_type: profileFrom.valueType
      //     ? profileFrom.valueType
      //     : user?.user?.license_type,
      //   license_number: profileFrom.licenseNum
      //     ? profileFrom.licenseNum
      //     : user?.user?.license_number,
      //   license_state: profileFrom.issueValue
      //     ? profileFrom.issueValue
      //     : user?.user?.license_state,
      //   license_expire: profileFrom.expDate
      //     ? new Date(
      //         `${profileFrom.expDate}-${profileFrom.month}-${profileFrom.year}`
      //       )
      //         .toISOString()
      //         .split("T")[0]
      //     : user?.user?.license_expire,
      //   agreement:
      //     active === 3
      //       ? {
      //           agreement_type: selectAgreement || user?.user?.agreement,
      //         }
      //       : null,
      // };
      // const res = await fetch(`${process.env.APP_API_URL}/influencers/update`, {
      //   method: "PUT",
      //   headers: {
      //     "Content-Type": "application/json",
      //     "x-auth-token": `${xAuthToken}`,
      //   },
      //   body: JSON.stringify(profileData),
      // })
      //   .then((response) => response.json())
      //   .then((data) => {
      //     console.log("data", data);
      //     if (data.status === 200) {
      //       setError(null);
      //       nextStep();
      //       setLoading(false);
      //       setUser(data);
      //       localStorage.setItem("x_auth_token_user", xAuthToken);
      //       // localStorage.setItem(
      //       //   "user",
      //       //   JSON.stringify({
      //       //     data,
      //       //     access_token: xAuthToken,
      //       //   })
      //       // );
      //       // setTimeout(() => {
      //       if (active === 2) {
      //         router.push("/", { scroll: false });
      //         dispatch(
      //           updateUser({
      //             data,
      //             access_token: xAuthToken,
      //           })
      //         );
      //       }
      //       // }, 2000);
      //     } else {
      //       setError(data.message);
      //       setLoading(false);
      //     }
      //   })
      //   .catch((error) => {
      //     console.error("Error:", error);
      //   });
    }

    if (active === 3) {
      nextStep();
    }
  };

  useEffect(() => {
    // get the localStorage user
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(user);
      setXAuthToken(user?.access_token);
    }
  }, []);

  return (
    <>
      {goingNext ? (
        <div className="pt-12 pb-5 w-full relative">
          <div className="max-w-[620px] w-full flex flex-col items-center px-3 mx-auto">
            {/* stepper */}
            {active !== 4 && (
              <>
                <ProgressBar setProgress={setProgress} progress={progress} />
                <div className="py-4"></div>
              </>
            )}

            {active !== 4 && (
              <div className="sm:hidden block w-full -mt-4">
                <div
                  onClick={() => {
                    setOpenSignUpModal(false);
                  }}
                  className="w-full flex items-end justify-end"
                >
                  <RiCloseFill className="text-white text-[20px] cursor-pointer" />
                </div>
              </div>
            )}
            <div className=""></div>
            {active !== 4 && (
              <>
                <h1 className="text-black text-[22px] sm:text-[24px] font-bold text-center mb-5 lg:mb-6">
                  SALON/SPA OWNERS ACCOUNT CREATION
                </h1>
              </>
            )}

            <form
              onSubmit={handleSubmit}
              className="flex flex-col h-full w-full mb-12"
            >
              {active === 1 && (
                <ContactForm
                  setOpened={setOpened}
                  opened={opened}
                  contactInput={contactInput}
                  setContactInput={setContactInput}
                />
              )}
              {active === 2 && (
                <CompanyDetails
                  active={active}
                  user={user}
                  setOpened={setOpened}
                  opened={opened}
                  companyDetails={companyDetails}
                  setCompanyDetails={setCompanyDetails}
                  // openedMonth={openedMonth}
                  // openedIssue={openedIssue}
                  // openedValueType={openedValueType}
                  // setOpenedIssue={setOpenedIssue}
                  // setOpenedValueType={setOpenedValueType}
                  // setOpenedMonth={setOpenedMonth}
                />
              )}
              {active === 3 && (
                <ProfileForm
                  active={active}
                  user={user}
                  profileFrom={profileFrom}
                  setProfileFrom={setProfileFrom}
                  openedMonth={openedMonth}
                  openedIssue={openedIssue}
                  openedValueType={openedValueType}
                  setOpenedIssue={setOpenedIssue}
                  setOpenedValueType={setOpenedValueType}
                  setOpenedMonth={setOpenedMonth}
                />
              )}
              {active === 4 && (
                <div className="flex-1 w-full h-full flex items-center justify-center flex-col pt-16 pb-6">
                  {/* <BsCheckCircleFill className="text-white text-[70px] sm:text-[100px]" /> */}
                  <Image
                    src="/images/Layer_1.svg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="gif"
                    className="object-contain w-[120px] h-[120px] sm:w-[265px] sm:h-[195px]"
                  />
                  <h1 className="text-black text-lg sm:text-[22px] font-semibold text-center mb-2 sm:mb-2 mt-12 sm:mt-12">
                    HANG IN THERE! <br />
                    YOUR WAXING SAMPLES WILL ARRIVE SOON
                  </h1>
                  <p className="text-[#a8a8a8b5] font-normal text-[16px] sm:text-[18px] mb-6 text-center">
                    We will send you an email to track your package.
                  </p>

                  <Button
                    title="SHOP BEST SELLERS"
                    className="!bg-primary !py-[6px]"
                  />
                </div>
              )}
              <div className="h-[20px]">
                {error && <p className="text-red-500 text-xs mb-2">{error}</p>}
              </div>

              {active !== 4 && (
                <Button
                  title="SEND & NEXT"
                  type="submit"
                  className="rounded-[3px] !py-[10px] !bg-primary"
                  loading={loading}
                />
              )}
            </form>

            {active !== 4 && (
              <div className="mb-4">
                <ChooseHeader />
              </div>
            )}
          </div>
        </div>
      ) : (
        <ChooseAccount
          setProgress={setProgress}
          setGoingNext={setGoingNext}
          selectAccountType={selectAccountType}
          setSelectAccountType={setSelectAccountType}
        />
      )}
    </>
  );
}

export default SignUp;
