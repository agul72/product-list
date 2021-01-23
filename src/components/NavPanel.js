import React, {useState, useEffect} from 'react';

export const NavPanel = (
    {
        page, pages,
        onChangePageNumber,
        onNextPageButtonClick,
        onPrevPageButtonClick
    }) => {

    const [inputPageValue, setInputPageValue] = useState(page);

    useEffect(() => {
        setInputPageValue(page);
    }, [page]);

    function onChangePageNumberHandler(event) {
        const number = event.target.value;
        setInputPageValue(number);
    }

    function onKeyPressPageNumberHandler(event) {
        if (event.key === 'Enter') {
            onChangePageNumber(inputPageValue);
            setInputPageValue(page);
        }
    }

    function onBlurPageNumberHandler() {
        onChangePageNumber(inputPageValue);
        setInputPageValue(page);
    }

    return (
        <div className="row g-2 mt-1 justify-content-end">
            <div className="col col-xl-3">
                <button
                    className='btn btn-link'
                    type='button'
                    onClick={onPrevPageButtonClick}
                >
                    &lt;&ensp;Prev Page
                </button>
            </div>
            <div className="col col-xl-3">
                <div className="row g-2">
                    <div className="col ">
                        <span className="form-control-plaintext ">page</span>
                    </div>
                    <div className="col">
                        <input
                            id='pageNumber'
                            type="text"
                            className="form-control"
                            value={inputPageValue}
                            onChange={onChangePageNumberHandler}
                            onKeyPress={onKeyPressPageNumberHandler}
                            onBlur={onBlurPageNumberHandler}
                        />
                    </div>
                    <div className="col">
                        <span className="form-control-plaintext">of {pages}</span>
                    </div>
                </div>
            </div>
            <div className="col col-xl-3">
                <button
                    className='btn btn-link'
                    type='button'
                    onClick={onNextPageButtonClick}
                >
                    Next Page&ensp;&gt;
                </button>
            </div>
        </div>
    )
}
