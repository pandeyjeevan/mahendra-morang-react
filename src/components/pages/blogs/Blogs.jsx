import { useEffect, useState } from "react";
import BlogsCard from "./BlogsCard";
import axios from "axios";
import GetRequest, { PostRequest } from "../http";

function Blogs() {
  const [fetchBlogs, setFetchBlogs] = useState([]);
  const [fetchCategory, setFetchCategory] = useState([]);

  console.log(fetchBlogs, "re");
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    author: "",
    likes: 300,
  });
  console.log(formData, "form data console");

  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [author, setAuthor] = useState();
  const [likes, setLikes] = useState();
  const [image, setImage] = useState(null);

  // console.log(title, category, author);
  const token = localStorage.getItem("token");

  const fetchBlogsData = async () => {
    const response = await GetRequest("blog/getAll");

    console.log(response, "response");
    // .json is used only for fetch
    // const finalFetch = await response.json();
    setFetchBlogs(response.data);
  };
  const fetchBlogsCategory = async () => {
    const response = await GetRequest("category/getAll");

    // .json is used only for fetch
    // const finalFetch = await response.json();
    setFetchCategory(response.data);
  };

  useEffect(() => {
    fetchBlogsData();
    fetchBlogsCategory();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData, "form data");

    const data = new FormData();
    data.append("title", formData.title);
    data.append("category", formData.category);
    data.append("author", formData.author);
    data.append("likes", formData.likes);
    if (image) {
      data.append("image", image);
    }
    // const body = {
    //   title: title,
    //   category: category,
    //   author: author,
    //   likes: 300,
    // };
    // console.log(body, "body");

    // const body = {
    //   title: "title",
    //   category: "category",
    //   author: "author",
    //   likes: 300,
    // };
    // console.log(body, "body");
    //   const response = await axios.post(
    //     "http://localhost:8000/blog/create",
    //     formData,
    //   );
    // };
    const response = await PostRequest("blog/create", data);

    await fetchBlogsData();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      {/* <button onClick={fetchBlogsData}>Get News</button> */}
      <h2>News page</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {fetchBlogs?.map((blog, index) => (
          <BlogsCard key={index} blog={blog} />
        ))}
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Blog Title
        </label>

        <input
          type="text"
          name="title"
          value={formData.title}
          // onChange={(e) => setTitle(e.target.value)}
          onChange={(e) => handleChange(e)}
          placeholder="Enter blog title"
          class="w-full border border-gray-300 rounded-lg px-4 py-3 
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Category
        </label>

        <select
          name="category"
          value={formData.category}
          // onChange={(e) => setCategory(e.target.value)}
          onChange={(e) => handleChange(e)}
          class="w-full border border-gray-300 rounded-lg px-4 py-3
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {fetchCategory.map((item, index) => (
            <option value={item._id}>{item.title}</option>
          ))}
          {/* <option value="">Select category</option>
          <option value="6abe38e9061326c12f58db0d">Blog</option>
          <option value="Technology">Technology</option>
          <option value="Programming">Programming</option>
          <option value="Tutorial">Tutorial</option> */}
        </select>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Author
        </label>

        <input
          type="text"
          name="author"
          value={formData.author}
          // onChange={(e) => setAuthor(e.target.value)}
          onChange={(e) => handleChange(e)}
          placeholder="Enter author name"
          class="w-full border border-gray-300 rounded-lg px-4 py-3
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Likes
        </label>

        <input
          type="number"
          name="likes"
          value="0"
          min="0"
          placeholder="Enter likes"
          class="w-full border border-gray-300 rounded-lg px-4 py-3
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Blog Image
        </label>

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
          class="w-full border border-gray-300 rounded-lg px-4 py-3
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div class="flex gap-3 pt-3">
        <button
          onClick={handleSubmit}
          class="bg-blue-600 text-white px-6 py-3 rounded-lg
                 hover:bg-blue-700 transition"
        >
          Create Blog
        </button>

        <button
          type="reset"
          class="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg
                 hover:bg-gray-300 transition"
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default Blogs;
