import React from "react";
import styled from "styled-components/macro";

function TopControls() {
  return (
    <div className="flex space-x-3">
      <div className="search-bar-container relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="w-5 h-5 text-gray-400"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <input
          type="text"
          className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
          placeholder="Search"
        />
      </div>
      <SelectMenu className="location-container">
        <div>
          <label className="select" htmlFor="slct">
            <select id="slct" required="required">
              <option value disabled="disabled" selected="selected">
                Location
              </option>
              <option value="#">One</option>
              <option value="#">Two</option>
              <option value="#">Three</option>
              <option value="#">Four</option>
              <option value="#">Five</option>
              <option value="#">Six</option>
              <option value="#">Seven</option>
            </select>
            <svg>
              <use xlinkHref="#select-arrow-down" />
            </svg>
          </label>
          {/* SVG Sprites*/}
          <svg className="sprites">
            <symbol id="select-arrow-down" viewBox="0 0 10 6">
              <polyline points="1 1 5 5 9 1" />
            </symbol>
          </svg>
        </div>
      </SelectMenu>
    </div>
  );
}

export default TopControls;

const SelectMenu = styled.div`
  * {
    box-sizing: border-box;
  }
  .select {
    position: relative;
    min-width: 200px;
  }
  .select svg {
    position: absolute;
    right: 12px;
    top: calc(50% - 3px);
    width: 10px;
    height: 6px;
    stroke-width: 2px;
    stroke: #9098a9;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    pointer-events: none;
  }
  .select select {
    -webkit-appearance: none;
    padding: 7px 40px 7px 12px;
    width: 100%;
    border: 1px solid #e8eaed;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 1px 3px -2px #9098a9;
    cursor: pointer;
    font-family: inherit;
    font-size: 16px;
    transition: all 150ms ease;
  }
  .select select:required:invalid {
    color: #5a667f;
  }
  .select select option {
    color: #223254;
  }
  .select select option[value=""][disabled] {
    display: none;
  }
  .select select:focus {
    outline: none;
    border-color: #07f;
    box-shadow: 0 0 0 2px rgba(0, 119, 255, 0.2);
  }
  .select select:hover + svg {
    stroke: #07f;
  }
  .sprites {
    position: absolute;
    width: 0;
    height: 0;
    pointer-events: none;
    user-select: none;
  }
`;
