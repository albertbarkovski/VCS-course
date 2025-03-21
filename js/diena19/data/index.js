window.addEventListener("DOMContentLoaded", () => renderPosts());

const container = document.querySelector(".irasai");

const renderPosts = async () => {
  let url = "http://localhost:3000/posts?_sort=likes&order=desc";

  const respose = await fetch(url);
  const posts = await respose.json();

  let template = "";
  posts.forEach((post) => {
    template += `
    <div class='post'>
     <h2>${post.title}</h2>
     <p><small>${post.likes} likes</small><p>
     <p>${post.body.slice(0, 198)}</p>
     <a href='details.html?id=${post.id}'>
     <button class='post-btn'>Plačiau</button>
     </a>
    </div>
    `;
  });
  container.innerHTML = template;
};
