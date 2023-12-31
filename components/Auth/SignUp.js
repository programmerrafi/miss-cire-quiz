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
import Link from "next/link";
import PicProducts from "./PicProducts";

const OffersData = [
  {
    image: "/icons/offer-1.svg",
    title: "Receive Free Samples \n ($60 Value)",
  },
  {
    image: "/icons/offer-2.svg",
    title: "20% OFF in your \n First Purchase",
  },
  {
    image: "/icons/offer-3.svg",
    title: "Lifetime Access to Pro \n Prices & Discounts",
  },
];

function SignUp() {
  const [progress, setProgress] = useState(0);
  const [goingNext, setGoingNext] = useState(0);
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
      // Regular expression for email validation
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

      if (contactInput.email.match(emailRegex)) {
        setError(null);
      } else {
        setError("Please enter valid email");
        return;
      }
      // Regular expression for password validation
      // const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
      const passRegex = /^(?=.*\d)(?=.*[a-z]).{6,}$/;

      if (contactInput.pass !== contactInput.confirmPass) {
        setError("Passwords do not match");
        return;
      }

      if (contactInput.pass.match(passRegex)) {
        setError(null);
      } else {
        setError(
          "Please enter valid password: Minimum 6 characters, one lowercase letter and one number"
        );
        return;
      }
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
      {goingNext === 0 && (
        <ChooseAccount
          setProgress={setProgress}
          setGoingNext={setGoingNext}
          selectAccountType={selectAccountType}
          setSelectAccountType={setSelectAccountType}
        />
      )}

      {/* stepper */}
      {active !== 4 && goingNext !== 0 && (
        <div className="max-w-[580px] w-full pt-6 sm:pt-0 px-5 sm:px-3 mx-auto">
          <ProgressBar setProgress={setProgress} progress={progress} />
          <div className="py-1"></div>
        </div>
      )}

      {goingNext === 1 && (
        <PicProducts setGoingNext={setGoingNext} setProgress={setProgress} />
      )}

      {goingNext === 2 && (
        <div className="pt-0 pb-5 w-full relative">
          <div className="max-w-[620px] w-full flex flex-col items-center px-3 mx-auto">
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
                <h1 className="text-black text-[22px] sm:text-[22px] font-bold text-center mb-4 lg:mb-[14px]">
                  SALON/SPA OWNERS ACCOUNT CREATION
                </h1>
              </>
            )}

            <form
              onSubmit={handleSubmit}
              className="flex flex-col h-full w-full mb-6"
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
                    onClick={() => router.push("https://misscire.com")}
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
              <div className="mb-[0px] sm:block hidden">
                <ChooseHeader active={active} />
              </div>
            )}

            {active !== 4 && (
              <div className="sm:hidden block w-full">
                <div className="flex sm:flex-row flex-col justify-between gap-2 sm:px-0 w-full">
                  {OffersData.map((item, index) => (
                    <div
                      className="w-full sm:w-[165px] bg-[#FAFAFA] sm:bg-white sm:border border-[#dfdfdfdd] flex flex-row sm:flex-col items-center sm:justify-center gap-2 sm:gap-0 py-2 px-4"
                      key={index}
                    >
                      <Image
                        src={item.image}
                        width={20}
                        height={20}
                        alt="ico"
                      />
                      <p className="text-[12px] text-black font-light text-center leading-4 sm:mt-[8px]">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default SignUp;
