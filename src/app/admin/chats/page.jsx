import Image from "next/image"
import  Image1 from "../../../../public/Images/h16.png"

const Adminchat = () => {
    return (
      <>
        {/* <!-- This is an example component --> */}
        <div className="container mx-auto rounded-lg shadow-lg">
          {/* <!-- headaer --> */}
          <div className="flex items-center justify-between px-5 py-5 bg-white border-b-2 text-cyan-700">
            <div className="text-2xl font-semibold">ClientChat</div>
            <div className="w-1/2">
              <input
                type="text"
                name=""
                id=""
                placeholder="search IRL"
                className="w-full px-5 py-3 bg-gray-100 rounded-2xl"
              />
            </div>
            <div
              className="flex items-center justify-center w-12 h-12 p-2 font-semibold text-white rounded-full bg-cyan-500"
            >
              RA
            </div>
          </div>
          {/* <!-- end header -->
          <!-- Chatting --> */}
          <div className="flex flex-row justify-between min-h-[80vh] bg-white">
            {/* <!-- chat list --> */}
            <div className="flex flex-col w-2/5 overflow-y-auto border-r-2">
              {/* <!-- end search compt -->
              <!-- user list --> */}
              <div
                className="flex flex-row items-center justify-center px-2 py-4 border-b-2"
              >
                <div className="w-1/4">
                  <Image
                    src={Image1}
                    className="object-cover w-12 h-12 rounded-full"
                    alt=""
                  />
                </div>
                <div className="w-full">
                  <div className="text-lg font-semibold">Luis1994</div>
                  <span className="text-gray-500">Pick me at 9:00 Am</span>
                </div>
              </div>
              <div className="flex flex-row items-center px-2 py-4 border-b-2">
                <div className="w-1/4">
                  <Image
                    src={Image1}
                    className="object-cover w-12 h-12 rounded-full"
                    alt=""
                  />
                </div>
                <div className="w-full">
                  <div className="text-lg font-semibold">Javascript Indonesia</div>
                  <span className="text-gray-500">Evan : some one can fix this</span>
                </div>
              </div>
              {/* <!-- end user list --> */}
            </div>
            {/* <!-- end chat list -->
            <!-- message --> */}
            <div className="flex flex-col justify-between w-full px-5">
              <div className="flex flex-col mt-5">
                <div className="flex justify-end mb-4">
                  <div
                    className="px-4 py-3 mr-2 text-white bg-cyan-700 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl"
                  >
                    Welcome to group everyone !
                  </div>
                </div>
                <div className="flex justify-start mb-4">
                  <div
                    className="px-4 py-3 ml-2 text-white bg-cyan-500 rounded-br-3xl rounded-tr-3xl rounded-tl-xl"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                    at praesentium, aut ullam delectus odio error sit rem. Architecto
                    nulla doloribus laborum illo rem enim dolor odio saepe,
                    consequatur quas?
                  </div>
                </div>
              </div>
              <div className="py-5">
                <input
                  className="w-full px-3 py-3 bg-white border border-cyan-800 focus:border-cyan-800 rounded-xl"
                  type="text"
                  placeholder="type your message here..."
                />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default Adminchat