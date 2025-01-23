import videoSource from './WebPageVideo.mp4';

const Video = () => {
  return (
    <div className="video-container">
      <video controls>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
