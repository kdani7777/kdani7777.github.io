const StravaFeed = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <iframe 
        title="Kush's latest runs"
        height='484' 
        width='75%'  
        src='https://www.strava.com/athletes/107534469/latest-rides/e3df8a2afda0d5fc8c7c7e28ce910add675c2d84'>
      </iframe>
    </div>
  );
};

export default StravaFeed;