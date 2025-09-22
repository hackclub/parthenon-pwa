import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Schedule() {
  return (
    <div className="min-h-screen bg-[#F4E3C1]">
      <Navbar />
      <div className="flex justify-center items-center mt-12 mb-12">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&mode=AGENDA&src=Y181NmQwZjdkYjJiMGZmYzlmMzU1NzRiMjkzODNkMzBjYzc3NjhkZGE5NTI1M2Q5ZGVlNzZkNWI2OTI5YmIwNzZlQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23f09300"
          className="border border-[#777] rounded-lg bg-[#F4E3C1] shadow-lg"
          width="500"
          height="600"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}
