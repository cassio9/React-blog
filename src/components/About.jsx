import about from "../images/about.png";
import food from "../images/food.jpg";
import deco from "../images/deco.jpg";
import work from "../images/work.jpg";

function Main() {
  return (
    <div className="flex">
      <div className="main-container">
        <img className="about-img" src={about} alt="Laughing person" />
        <h2>My name is John and living the simple life saved my life</h2>
        <p>
          <span>I used to be a pack rat.</span> I had so many things that I
          thought that I loved, but the truth was I couldn't even appreciate any
          of it because there was too much.
        </p>
        <p>
          Things were terrible. I had a job that I hated, a home that I didn't
          want to live in, and I couldn't hold a relationship.
        </p>
        <h3>How I turned things around</h3>
        <p>
          I was on the verge of a breakdown when I got rid of everything. I
          literally put 90% of my possessions in the garbage, sold my place and
          moved into a smaller apartment, and I quit my job.
        </p>
        <p>
          It wasn't easy at all, but everything around me was in such a bad
          place, I didn't know what else to do. And it worked.
        </p>
        <h3>Now I live the simple life</h3>
        <p>
          Now that I'm living a simple life, things are so much better. I'm less
          stressed, enjoy life and work more, and I have more free time to
          enjoy. With how much it turned my life around,
          <span>
            I felt like I had no choice but to start sharing how I did it,{" "}
          </span>
          and how others can benefit from living a simple life as well, which is
          why I started this site!
        </p>
      </div>
      <section className="recent-container">
        <div className="posts-container">
          <img src={food} alt="Food on the table" />
          <p>Keeping cooking simple</p>
        </div>
      </section>
      <section className="recent-container">
        <h2>RECENT POSTS</h2>
        <div className="posts-container">
          <img src={food} alt="Food on the table" />
          <p>Keeping cooking simple</p>
        </div>
        <div className="posts-container">
          <img className="work-img" src={work} alt="Work desk and table" />
          <p>Simplicity and work</p>
        </div>
        <div>
          <img className="deco-img" src={deco} alt="Flower vase" />
          <p>Simple decorations</p>
        </div>
      </section>
    </div>
  );
}

export default Main;
