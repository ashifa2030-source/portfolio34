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
    <section className="flex flex-col items-center py-[100px] gap-6 w-full bg-gray-50">
      {/* Heading */}
      <div className="flex flex-col items-center gap-6 text-center max-w-[540px]">
        <h2 className="text-[48px] font-semibold text-[#132238] leading-[56px]">
          Blog
        </h2>
        <p className="text-[18px] text-[#87909D] leading-[26px] w-[840px]">
         I write about modern web development, programming best practices, and real-world project experiences. My articles focus on helping developers build better, faster, and more scalable web applications using modern tools and technologies.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="flex justify-center gap-6 max-w-[1320px] flex-wrap">
        {posts.map((post, index) => (
          <div
            key={index}
            className="flex flex-col gap-6 w-[312px] h-[350px]
                       bg-white border border-[#F0F1F3] rounded-lg
                       shadow-[0_12px_64px_rgba(28,25,25,0.12)] overflow-hidden"
          >
            {/* Blog Image */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[226px] object-cover"
            />

            {/* Blog Info */}
            <div className="flex flex-col gap-2 px-6">
              <div className="flex items-center gap-1 text-[14px] text-[#87909D]">
                <span>{post.date}</span>
                <span>/</span>
                <span>{post.comments}</span>
              </div>

              <p className="text-[18px] font-medium text-[#333333] leading-[24px]">
                {post.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex gap-3 mt-6">
        <div className="w-[30px] h-[8px] bg-[#210C33] rounded-full"></div>
        <div className="w-[8px] h-[8px] bg-[#C3C7CE] rounded-full"></div>
        <div className="w-[8px] h-[8px] bg-[#C3C7CE] rounded-full"></div>
      </div>
    </section>
  );
}
