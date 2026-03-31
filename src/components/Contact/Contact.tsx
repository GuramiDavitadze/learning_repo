const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 text-center mt-20">
      <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
      <p className="text-slate-400 mb-10">Have a project in mind? Reach out!</p>

      <form className="grid grid-cols-1 gap-4 max-w-md mx-auto">
        <input
          type="email"
          placeholder="your@email.com"
          className="px-4 py-3 rounded-xl border border-slate-700 focus:ring-2 focus:ring-indigo-500 transition"
        />
        <button className="py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-indigo-50 transition cursor-pointer">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
