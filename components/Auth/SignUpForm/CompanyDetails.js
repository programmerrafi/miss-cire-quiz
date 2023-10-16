import React from "react";
import { Select } from "@mantine/core";
import { Popover, Text, Button } from "@mantine/core";
import { BsExclamationSquareFill } from "react-icons/bs";

function CompanyDetails({
  companyDetails,
  setCompanyDetails,
  opened,
  setOpened,
}) {
  return (
    <div className="flex-1">
      <div className={`input-group sm:mb-[20px] mb-[12px] `}>
        <input
          type="text"
          value={companyDetails.companyName}
          onChange={(e) =>
            setCompanyDetails({
              ...companyDetails,
              companyName: e.target.value,
            })
          }
          name=""
          id="companyName"
          placeholder=" "
          required
        />
        <label htmlFor="companyName">Company</label>
      </div>

      {/* address */}
      <div className={`input-group sm:mb-[20px] mb-[12px] `}>
        <input
          type="text"
          value={companyDetails.address}
          onChange={(e) =>
            setCompanyDetails({ ...companyDetails, address: e.target.value })
          }
          name=""
          // ref={inputRefAddress}
          id="address"
          placeholder=" "
          required
        />
        <label htmlFor="address">Address Line 1</label>
      </div>

      <div className={`input-group sm:mb-[20px] mb-[12px] `}>
        <input
          type="text"
          value={companyDetails.city}
          onChange={(e) =>
            setCompanyDetails({ ...companyDetails, city: e.target.value })
          }
          name=""
          // ref={inputRefAddress}
          id="city"
          placeholder=" "
          required
        />
        <label htmlFor="city">City</label>
      </div>

      {/* state */}
      <div className="contact_pop flex-1">
        <Popover
          opened={companyDetails.state === "" ? opened : false}
          width={180}
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
              onClick={() => setOpened(false)}
              className="mb-4 sign_up_selector"
            >
              <Select
                placeholder="State"
                searchable
                value={companyDetails.state}
                onChange={(value) =>
                  setCompanyDetails({ ...companyDetails, state: value })
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
              <p className="text-[#000] text-xs">Please select a state</p>
            </div>
          </Popover.Dropdown>
        </Popover>
      </div>

      <div className="flex gap-4">
        <div className={`input-group sm:mb-[12px] mb-[12px] flex-1`}>
          <input
            type="text"
            value={companyDetails.country}
            onChange={(e) =>
              setCompanyDetails({ ...companyDetails, country: e.target.value })
            }
            name=""
            // disabled
            // ref={inputRefAddress}
            id="country"
            placeholder=" "
            required
          />
          <label htmlFor="country">Country</label>
        </div>
        {/* zip */}
        <div className={`input-group sm:mb-[12px] mb-[12px] flex-1`}>
          <input
            type="text"
            name=""
            value={companyDetails.zip}
            onChange={(e) =>
              setCompanyDetails({ ...companyDetails, zip: e.target.value })
            }
            // ref={inputRefAddress}
            id="zip"
            placeholder=" "
            required
          />
          <label htmlFor="zip">Zip</label>
        </div>
      </div>

      {/* <div className={`input-group sm:mb-[20px] mb-[12px] `}>
    <input
      type="text"
      value={contactInput.country}
      disabled={true}
      onChange={(e) =>
        setContactInput({ ...contactInput, country: e.target.value })
      }
      name=""
      // ref={inputRefAddress}
      id="country"
      placeholder=" "
      required
    />
    <label htmlFor="country">Country</label>
  </div> */}

      {/* <div className="sign_up_selector">
    <Select
      placeholder="Country"
      data={[
        { value: "react", label: "React" },
        { value: "ng", label: "Angular" },
        { value: "svelte", label: "Svelte" },
        { value: "vue", label: "Vue" },
      ]}
    />
  </div> */}
    </div>
  );
}

export default CompanyDetails;
