// ✅ Import images correctly
import blog1 from "../img/blog1.png";
import blog2 from "../img/blog2.png";
import blog3 from "../img/blog3.png";
import blog4 from "../img/blog4.png";

export default function Blog() {
  const posts = [
    {
      image: blog1,
      date: "22 Oct, 2022",
      comments: "246 Comments",
      title: "Building Scalable Web Applications with React",
    },
    {
      image: blog2,
      date: "15 Nov, 2023",
      comments: "198 Comments",
      title: "REST APIs and Backend Architecture Explained",
    },
    {
      image: blog3,
      date: "05 Dec, 2022",
      comments: "312 Comments",
      title: "Frontend Performance Optimization Techniques",
    },
    {
      image: blog4,
      date: "20 Jan, 2024",
      comments: "154 Comments",
      title: "Full-Stack Development Workflow: From Idea to Deployment",
    },
  ];

  return (
    <section className="flex flex-col items-center py-24 gap-12 w-full bg-gray-50 px-6 md:px-12 lg:px-20">
      {/* Heading */}
      <div className="flex flex-col items-center gap-4 text-center max-w-[540px]">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#132238] leading-tight">
          Blog
        </h2>
        <p className="text-base sm:text-lg text-[#87909D] leading-7 md:w-[640px] lg:w-[840px]">
          I write about modern web development, programming best practices, and
          real-world project experiences. My articles focus on helping developers
          build better, faster, and more scalable web applications using modern tools and technologies.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1320px]">
        {posts.map((post, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 bg-white border border-[#F0F1F3] rounded-lg shadow-[0_12px_64px_rgba(28,25,25,0.12)] overflow-hidden"
          >
            {/* Blog Image */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-56 sm:h-48 md:h-56 object-cover"
            />

            {/* Blog Info */}
            <div className="flex flex-col gap-2 px-4 md:px-6 py-2">
              <div className="flex items-center gap-1 text-xs sm:text-sm text-[#87909D]">
                <span>{post.date}</span>
                <span>/</span>
                <span>{post.comments}</span>
              </div>

              <p className="text-sm sm:text-base md:text-lg font-medium text-[#333333] leading-snug">
                {post.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex gap-3 mt-6">
        <div className="w-8 h-2 sm:w-8 sm:h-2 bg-[#210C33] rounded-full"></div>
        <div className="w-2 h-2 bg-[#C3C7CE] rounded-full"></div>
        <div className="w-2 h-2 bg-[#C3C7CE] rounded-full"></div>
      </div>
    </section>
  );
}
