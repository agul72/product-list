import React from "react";

export const Form =
    ({
         filter,
         onFilterChange,
         onAddBtnClick,
         sortByValue,
         onChangeSort
     }) => {
        return (
            <div className="row g-3 mt-1">
                <div className="col-auto">
                    <button
                        className="btn btn-primary mb-3"
                        onClick={onAddBtnClick}
                    >
                        + Add
                    </button>
                </div>
                <div className="col-auto">
                    <label htmlFor="inputFilter" className="visually-hidden">Filter</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputFilter"
                        placeholder="Filter..."
                        value={filter}
                        onChange={onFilterChange}
                    />
                </div>
                <div className="col-auto">
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        value={sortByValue}
                        onChange={onChangeSort}
                    >
                        <option value='0' hidden>Open this select menu</option>
                        <option value="index">Sort by index</option>
                        <option value="name">Sort by name</option>
                        <option value="price">Sort by price</option>
                    </select>
                </div>
            </div>
        )
    }
