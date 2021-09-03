export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex bg-blue-500 bg">
          <div className="w-3/12 uppercase text-2xl font-semibold tracking-widest">
          Logo
          </div>
          <div className="w-6/12 ">
            <ul>
              <li><a className="text-white text-opacity-60 font-semibold">Profile</a></li>
              <li><a className="text-white text-opacity-60 font-semibold">Skills</a></li>
              <li><a className="text-white text-opacity-60 font-semibold">Projects</a></li>
              <li><a className="text-white text-opacity-60 font-semibold">Contacts</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
