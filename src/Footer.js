import React from "react"


export default function Footer({ profileUrl, repoUrl, liveUrl }) {
  const year = new Date().getFullYear();

  return (
    <div className="footer tiny">
      <p>
        Built by <strong>Jenn Bencriscutto</strong> • © {year} JP Creative Works
      </p>

      <p className="links">
        <a href={profileUrl} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
        <span> • </span>
        <a href={repoUrl} target="_blank" rel="noopener noreferrer">Repository</a>
        <span> • </span>
        <a href={liveUrl} target="_blank" rel="noopener noreferrer">Live Site</a>
      </p>
    </div>
  )
}