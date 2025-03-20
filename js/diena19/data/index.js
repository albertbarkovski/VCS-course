window.addEventListener("DOMContentLoaded", () => renderPosts());

const container = document.querySelector(".irasai");

const renderPosts = async () => {
  let url = "http://localhost:3000/posts";

  const respose = await fetch(url);
  const posts = await respose.json();

  let template = "";
  posts.forEach((post) => {
    template += `
    <div class='post'>
     <h2>${post.title}</h2>
     <p><small>${post.likes} likes</small><p>
     <p>${post.body.slice(0, 200)}</p>
    </div>
    `;
  });
  container.innerHTML = template;
};
