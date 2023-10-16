import React, { useState } from "react";

function ContactForm({
  setContactInput,
  contactInput,
  opened,
  setOpened,
  customerForm = false,
}) {
  return (
    <div className={`flex-1 ${customerForm && "mb-8"}`}>
      {/* 1 */}
      <div className={`input-group sm:mb-[20px] mb-[12px] `}>
        <input
          type="text"
          value={contactInput.fname}
          onChange={(e) =>
            setContactInput({ ...contactInput, fname: e.target.value })
          }
          name=""
          // ref={inputRefAddress}
          id="fname"
          placeholder=" "
          required
        />
        <label htmlFor="fname">First Name</label>
      </div>
      {/* 2 */}
      <div className={`input-group sm:mb-[20px] mb-[12px] relative`}>
        <input
          type="text"
          name=""
          value={contactInput.lname}
          onChange={(e) =>
            setContactInput({ ...contactInput, lname: e.target.value })
          }
          // ref={inputRefAddress}
          className="rounded-[4px]"
          id="lname"
          placeholder=" "
          required
        />
        <label htmlFor="lname">Last Name</label>
      </div>
      {/* 3 */}
      <div className={`input-group sm:mb-[20px] mb-[12px] `}>
        <input
          type="email"
          value={contactInput.email}
          onChange={(e) =>
            setContactInput({ ...contactInput, email: e.target.value })
          }
          name=""
          // ref={inputRefAddress}
          id="email"
          placeholder=" "
          required
        />
        <label htmlFor="email">Email Address</label>
      </div>
      {/* 4 */}
      <div className="flex gap-4">
        <div className={`input-group sm:mb-[20px] mb-[12px] `}>
          <input
            type="number"
            value={contactInput.phone}
            onChange={(e) =>
              setContactInput({ ...contactInput, phone: e.target.value })
            }
            name=""
            // ref={inputRefAddress}
            id="phone"
            placeholder=" "
            required
          />
          <label htmlFor="phone">Phone Number</label>
        </div>
      </div>
      {/* 5 */}
      <div className={`input-group sm:mb-[20px] mb-[12px] `}>
        <input
          type="password"
          value={contactInput.pass}
          onChange={(e) =>
            setContactInput({ ...contactInput, pass: e.target.value })
          }
          name=""
          // ref={inputRefAddress}
          id="pass"
          placeholder=" "
          required
        />
        <label htmlFor="pass">Password</label>
      </div>
      {/* 6 */}
      <div className={`input-group sm:mb-[20px] mb-[12px] `}>
        <input
          type="password"
          value={contactInput.confirmPass}
          onChange={(e) =>
            setContactInput({ ...contactInput, confirmPass: e.target.value })
          }
          name=""
          // ref={inputRefAddress}
          id="confirmPass"
          placeholder=" "
          required
        />
        <label htmlFor="confirmPass">Confirm Password</label>
      </div>

      {/* address */}
      {/* <div className={`input-group sm:mb-[20px] mb-[12px] `}>
        <input
          type="text"
          value={contactInput.address}
          onChange={(e) =>
            setContactInput({ ...contactInput, address: e.target.value })
          }
          name=""
          // ref={inputRefAddress}
          id="address"
          placeholder=" "
          required
        />
        <label htmlFor="address">Address</label>
      </div> */}

      {/* <div className="flex gap-4">
        <div className={`input-group sm:mb-[20px] mb-[12px] `}>
          <input
            type="text"
            value={contactInput.city}
            onChange={(e) =>
              setContactInput({ ...contactInput, city: e.target.value })
            }
            name=""
            // ref={inputRefAddress}
            id="city"
            placeholder=" "
            required
          />
          <label htmlFor="city">City</label>
        </div>
        <div className={`input-group sm:mb-[20px] mb-[12px] `}>
          <input
            type="text"
            name=""
            value={contactInput.zip}
            onChange={(e) =>
              setContactInput({ ...contactInput, zip: e.target.value })
            }
            // ref={inputRefAddress}
            id="zip"
            placeholder=" "
            required
          />
          <label htmlFor="zip">Zip</label>
        </div>
      </div> */}

      {/* state */}
      {/* <div className={`input-group sm:mb-[20px] mb-[12px] `}>
        <input
          type="text"
          value={contactInput.state}
          onChange={(e) =>
            setContactInput({ ...contactInput, state: e.target.value })
          }
          name=""
          // ref={inputRefAddress}
          id="state"
          placeholder=" "
          required
        />
        <label htmlFor="state">State</label>
      </div> */}
      {/* <div className="contact_pop">
        <Popover
          opened={contactInput.state === "" ? opened : false}
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
                value={contactInput.state}
                onChange={(value) =>
                  setContactInput({ ...contactInput, state: value })
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
      </div> */}

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

export default ContactForm;
