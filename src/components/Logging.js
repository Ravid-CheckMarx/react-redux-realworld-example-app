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
        Here is your flag: <br /> <br />
        {'flag{InsUfF1C3nT_L0gG1nG}'}
        <br />
        <br />
        Description: Insufficient logging and monitoring, coupled with missing
        or ineffective integration with incident response, <br />
        allows attackers to further attack systems, maintain persistence, pivot
        to more systems to tamper with, extract, or destroy data. <br />
        Most breach studies demonstrate the time to detect a breach is over 200
        days, typically detected by external parties rather than internal
        processes or monitoring
      </div>
    </>
  );
}

export default memo(Logging);
