import ReactHlsPlayer from "react-hls-player";

function PreviewPage(){
  return <ReactHlsPlayer
  src="https://content.jwplatform.com/manifests/yp34SRmf.m3u8"
  autoPlay={false}
  controls={true}
  width="100%"
  height="auto"
/>

}

export default PreviewPage;