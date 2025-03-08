import React from 'react'

const Hero = () => {
  return (
    <div className={classes.background}
        style={{
        background: `linear-gradient(
            190deg,
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0.8)),
            url(${salmon})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
        }}
        >
        <h1>
            {}
        </h1>
    </div>
  )
}

export default Hero