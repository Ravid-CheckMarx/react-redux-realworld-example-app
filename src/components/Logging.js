import React, { memo } from 'react';

function Logging() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        You have completed credential stuffing attack on the application! <br />
        Due to the fact the app does not log and monitor anything, <br />
        you are of the hook this time! <br />
        Check out the logging endpoint in the backend (:
      </div>
    </>
  );
}

export default memo(Logging);
