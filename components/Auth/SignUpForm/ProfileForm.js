import React, { useState } from "react";
import { Select } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { Popover } from "@mantine/core";
import { BsExclamationSquareFill } from "react-icons/bs";

function ProfileForm({
  active,
  user,
  setProfileFrom,
  profileFrom,
  openedMonth,
  openedIssue,
  openedValueType,
  setOpenedIssue,
  setOpenedValueType,
  setOpenedMonth,
}) {
  // console.log("user: ", user);

  return (
    <div className={`flex-1 ${active === 2 && "mt-4"}`}>
      <div className="contact_pop w-full">
        <Popover
          opened={profileFrom.valueType === "" ? openedValueType : false}
          width={150}
          position="bottom-start"
          withArrow
          shadow="md"
          arrowPosition="side"
          arrowSize={10}
          arrowOffset={20}
          offset={{ mainAxis: 7, crossAxis: 50 }}
          transitionProps={{ transition: "pop" }}
        >
          <Popover.Target>
            <div
              onClick={() => setOpenedValueType(false)}
              className="mb-4 sign_up_selector"
            >
              <Select
                placeholder="Select type"
                value={profileFrom.valueType}
                onChange={(value) =>
                  setProfileFrom({ ...profileFrom, valueType: value })
                }
                data={[
                  {
                    value: "cosmetology license",
                    label: "Cosmetology License",
                  },
                  {
                    value: "esthetician license",
                    label: "Esthetician License",
                  },
                  { value: "salon license", label: "Salon License" },
                ]}
              />
            </div>
          </Popover.Target>

          <Popover.Dropdown>
            <div className="flex text-black items-center gap-2">
              <BsExclamationSquareFill className="text-[#ffa301]" size={20} />
              <p className="text-[#000] text-xs">Select a Type</p>
            </div>
          </Popover.Dropdown>
        </Popover>
      </div>

      {/* 2 */}
      <div className={`input-group mb-4`}>
        <input
          value={profileFrom.licenseNum}
          onChange={(e) =>
            setProfileFrom({ ...profileFrom, licenseNum: e.target.value })
          }
          type="text"
          name=""
          id="license_number"
          placeholder=" "
          required
        />
        <label htmlFor="license_number">Enter your license number</label>
      </div>
      {/* 3 */}
      <div className="contact_pop w-full">
        <Popover
          opened={profileFrom.issueValue === "" ? openedIssue : false}
          width={150}
          position="bottom-start"
          withArrow
          shadow="md"
          arrowPosition="side"
          arrowSize={10}
          arrowOffset={20}
          offset={{ mainAxis: 7, crossAxis: 50 }}
          transitionProps={{ transition: "pop" }}
        >
          <Popover.Target>
            <div
              onClick={() => setOpenedIssue(false)}
              className="mb-4 sign_up_selector"
            >
              <Select
                searchable
                placeholder="State where license issued"
                value={profileFrom.issueValue}
                onChange={(value) =>
                  setProfileFrom({ ...profileFrom, issueValue: value })
                }
                data={[
                  { value: "alabama", label: "Alabama" },
                  { value: "alaska", label: "Alaska" },
                  { value: "arizona", label: "Arizona" },
                  { value: "arkansas", label: "Arkansas" },
                  { value: "california", label: "California" },
                  { value: "colorado", label: "Colorado" },
                  { value: "connecticut", label: "Connecticut" },
                  { value: "delaware", label: "Delaware" },
                  { value: "florida", label: "Florida" },
                  { value: "georgia", label: "Georgia" },
                  { value: "hawaii", label: "Hawaii" },
                  { value: "idaho", label: "Idaho" },
                  { value: "illinois", label: "Illinois" },
                  { value: "indiana", label: "Indiana" },
                  { value: "iowa", label: "Iowa" },
                  { value: "kansas", label: "Kansas" },
                  { value: "kentucky", label: "Kentucky" },
                  { value: "louisiana", label: "Louisiana" },
                  { value: "maine", label: "Maine" },
                  { value: "maryland", label: "Maryland" },
                  { value: "massachusetts", label: "Massachusetts" },
                  { value: "michigan", label: "Michigan" },
                  { value: "minnesota", label: "Minnesota" },
                  { value: "mississippi", label: "Mississippi" },
                  { value: "missouri", label: "Missouri" },
                  { value: "montana", label: "Montana" },
                  { value: "nebraska", label: "Nebraska" },
                  { value: "nevada", label: "Nevada" },
                  { value: "new hampshire", label: "New Hampshire" },
                  { value: "new jersey", label: "New Jersey" },
                  { value: "new mexico", label: "New Mexico" },
                  { value: "new york", label: "New York" },
                  { value: "north carolina", label: "North Carolina" },
                  { value: "north dakota", label: "North Dakota" },
                  { value: "ohio", label: "Ohio" },
                  { value: "oklahoma", label: "Oklahoma" },
                  { value: "oregon", label: "Oregon" },
                  { value: "pennsylvania", label: "Pennsylvania" },
                  { value: "rhode island", label: "Rhode Island" },
                  { value: "south carolina", label: "South Carolina" },
                  { value: "south dakota", label: "South Dakota" },
                  { value: "tennessee", label: "Tennessee" },
                  { value: "texas", label: "Texas" },
                  { value: "utah", label: "Utah" },
                  { value: "vermont", label: "Vermont" },
                  { value: "virginia", label: "Virginia" },
                  { value: "washington", label: "Washington" },
                  { value: "west virginia", label: "West Virginia" },
                  { value: "wisconsin", label: "Wisconsin" },
                  { value: "wyoming", label: "Wyoming" },
                ]}
              />
            </div>
          </Popover.Target>

          <Popover.Dropdown>
            <div className="flex text-black items-center gap-2">
              <BsExclamationSquareFill className="text-[#ffa301]" size={20} />
              <p className="text-[#000] text-xs">Select a State</p>
            </div>
          </Popover.Dropdown>
        </Popover>
      </div>

      {/* 4 */}
      <div className="flex gap-4">
        <div className={`input-group`}>
          <input
            type="text"
            value={profileFrom.expDate}
            onChange={(e) =>
              setProfileFrom({ ...profileFrom, expDate: e.target.value })
            }
            name=""
            // ref={inputRefAddress}
            id="exp_date"
            placeholder=" "
            required
          />
          <label htmlFor="exp_date" className="hidden sm:block">
            Expiration Day
          </label>
          <label htmlFor="exp_date" className="block sm:hidden">
            Ex: Day
          </label>
        </div>
        {/* <div className="w-full">
          <DatePickerInput
            placeholder="Pick date"
            value={value}
            onChange={setValue}
            mx="auto"
            maw={400}
          />
        </div> */}
        <div className="contact_pop w-full">
          <Popover
            opened={profileFrom.month === "" ? openedMonth : false}
            width={150}
            position="bottom-start"
            withArrow
            shadow="md"
            arrowPosition="side"
            arrowSize={10}
            arrowOffset={20}
            offset={{ mainAxis: 7, crossAxis: 50 }}
            transitionProps={{ transition: "pop" }}
          >
            <Popover.Target>
              <div
                onClick={() => setOpenedMonth(false)}
                className="w-full sign_up_selector"
              >
                <Select
                  searchable
                  placeholder="Month"
                  value={profileFrom.month}
                  onChange={(value) =>
                    setProfileFrom({ ...profileFrom, month: value })
                  }
                  data={[
                    { value: "Jan", label: "January" },
                    { value: "Feb", label: "February" },
                    { value: "Mar", label: "March" },
                    { value: "Apr", label: "April" },
                    { value: "May", label: "May" },
                    { value: "Jun", label: "June" },
                    { value: "Jul", label: "July" },
                    { value: "Aug", label: "August" },
                    { value: "Sep", label: "September" },
                    { value: "Oct", label: "October" },
                    { value: "Nov", label: "November" },
                    { value: "Dec", label: "December" },
                  ]}
                />
              </div>
            </Popover.Target>

            <Popover.Dropdown>
              <div className="flex text-black items-center gap-2">
                <BsExclamationSquareFill className="text-[#ffa301]" size={20} />
                <p className="text-[#000] text-xs">Select a Month</p>
              </div>
            </Popover.Dropdown>
          </Popover>
        </div>

        {/* <div className={`input-group `}>
          <input
            type="text"
            value={profileFrom.month}
            onChange={(e) =>
              setProfileFrom({ ...profileFrom, month: e.target.value })
            }
            name=""
            // ref={inputRefAddress}
            id="input-picker"
            placeholder=" "
            required
          />
          <label htmlFor="input-picker">Month</label>
        </div> */}
        <div className={`input-group `}>
          <input
            type="number"
            value={profileFrom.year}
            onChange={(e) =>
              setProfileFrom({ ...profileFrom, year: e.target.value })
            }
            name=""
            // ref={inputRefAddress}
            id="Year"
            placeholder=" "
            required
          />
          <label htmlFor="Year" className="hidden sm:block">
            Expiration Year
          </label>
          <label htmlFor="Year" className="block sm:hidden">
            Ex: Year
          </label>
        </div>
      </div>
    </div>
  );
}

export default ProfileForm;
