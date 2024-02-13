const TwitterFeed = () => {
  return (
    <div className="mx-auto max-w-2xl">
      <a
        className="twitter-timeline"
        data-width="100%"
        data-height="600"
        data-theme="light"
        href="https://twitter.com/kushdani26?ref_src=twsrc%5Etfw"
      >
        Tweets by kushdani26
      </a>
      <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
    </div>
  );
};

export default TwitterFeed;