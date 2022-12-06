export default function Main() {
  return (
    <>
      <div className="main">
        <div className="main-info">
          <h2 className="info-name">Itachi Uchia</h2>
          <h5 className="info-desi">Rog Ninja</h5>
          <p className="info-web">Akatsuki.com</p>
        </div>
        <div className="main-contact">
          <button className="main-email">
            <span>
              <i className="fa-solid fa-envelope"></i>
            </span>
            Email
          </button>
          <button className="main-LinkedIn">
            <span>
              <i className="fa-brands fa-linkedin"></i>
            </span>
            LinkedIn
          </button>
        </div>

        <div className="main-bio">
          <h2 className="main-head">About</h2>
          <p className="main-desc">
            A child whose genius manifested at a young age, Itachi's teachers at
            the Academy noted that his progress hardly required any help, having
            been quickly promoted through the ninja ranks while still a child,
            further showing his remarkable capacities and ultimately gaining
            great prowess with all of the three main types of techniques. In his
            battles, Itachi was shown to be an immensely powerful ninja and
            gained praise from allies and foes alike.
          </p>
          <h2 className="main-head">Skills</h2>
          <p className="main-desc">
            Ninjutsu, Bukijutsu, Nature Transformation, Genjutsu, Dōjutsu,
            Sharingan, Mangekyō, Sharingan, Intelligence, Susanno
          </p>
        </div>
      </div>
    </>
  );
}
