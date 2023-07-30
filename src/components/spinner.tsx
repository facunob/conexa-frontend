import React from 'react';

const Spinner = () => {
    return (
       <div className="d-flex justify-content-center align-items-center mb-3">
           <div className="spinner-border" role="status">
               <span className="sr-only" />
           </div>
       </div>
    );
};

export default Spinner;