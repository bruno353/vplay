const Hero2 = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white px-[20px] pt-[48px] text-[#000000] lg:pt-[97px]"
      >
        <div className="mx-auto xl:w-[1000px]">
          <div className="flex justify-center text-[22px] font-bold -tracking-[2.2%] lg:text-[33px] lg:!leading-[150%] xl:text-[48px]">
            Why choose Openmesh?
          </div>
          <div className="mt-[15px] flex justify-center text-[14px] font-medium -tracking-[2%] lg:mt-[30px] lg:text-center lg:text-[20px] lg:!leading-[44px] xl:text-[28px]">
            Openmesh is the leading open-source data protocol that helps
            individuals and businesses to access on-chain and off-chain data
            seamlessly through our 3 core services:
          </div>
          <div className="mx-auto mt-[45px] items-center justify-center md:grid md:grid-cols-3 md:gap-x-[60px] lg:mt-[91px]">
            <div className="lg:w-[294px]">
              <div className="">
                <img
                  src={`${
                    process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                      ? process.env.NEXT_PUBLIC_BASE_PATH
                      : ''
                  }/images/techs/xnode-logo.png`}
                  alt="image"
                  className={`mx-auto w-[110px]`}
                />
                <div className="justify-center text-center font-bold text-[#4A87FF]">
                  Decentralized Infrastructure
                </div>
                <div className="justify-center text-center text-[#4A87FF]">
                  (as a service)
                </div>
                <div className="mx-auto mt-[10px] max-w-[200px] justify-center text-center text-[10px] font-bold !leading-[20px] lg:mt-[20px] lg:text-[14px] xl:text-[20px]">
                  All-in-one decentralized data infrastructure.
                </div>
                <img
                  src={`${
                    process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                      ? process.env.NEXT_PUBLIC_BASE_PATH
                      : ''
                  }/images/techs/xnode.png`}
                  alt="image"
                  className={`mt-[10px] w-full`}
                />
              </div>
              <div className="mt-[10px] text-[16px] font-bold lg:mt-[20px] lg:text-[23px] lg:!leading-[150%] xl:text-[32px]">
                xNode <span className="font-medium text-[#959595]">(IaaS)</span>
              </div>
              <div className="mt-[10px] text-[10px] font-medium lg:mt-[20px] lg:text-[14px] xl:text-[20px]">
                Tool to create a fully functional full-stack data infrastructure
                from scratch on bare metal servers
              </div>
              <div className="mt-[10px] flex text-center lg:mt-[20px]">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.openmesh.network/academy#xnode`}
                  className="cursor-pointer rounded-[5px] bg-[#0354EC] px-[18px] py-[9.5px]  text-[10px] font-bold text-white hover:bg-[#0447c5] lg:py-[11.5px] lg:px-[35px] lg:text-[12px] lg:!leading-[19px] xl:text-[16px]"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="mt-[45px] md:mt-0 lg:w-[294px]">
              <div className="">
                <img
                  src={`${
                    process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                      ? process.env.NEXT_PUBLIC_BASE_PATH
                      : ''
                  }/images/techs/unifiedAPI-logo.png`}
                  alt="image"
                  className={`mx-auto w-[150px]`}
                />
                <div className="justify-center text-center font-bold text-[#4A87FF]">
                  Decentralized plataform
                </div>
                <div className="justify-center text-center text-[#4A87FF]">
                  (as a service)
                </div>
                <div className="mx-auto mt-[10px] max-w-[250px] justify-center text-center text-[10px] font-bold !leading-[20px] lg:mt-[20px] lg:text-[14px] xl:text-[20px]">
                  Single endpoint for all crypto & web3 data, free forever.
                </div>
                <img
                  src={`${
                    process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                      ? process.env.NEXT_PUBLIC_BASE_PATH
                      : ''
                  }/images/techs/unifiedAPI.svg`}
                  alt="image"
                  className={`mx-auto  w-[200px]`}
                />
              </div>
              <div className="mt-[10px] text-[16px] font-bold lg:mt-[20px] lg:text-[23px] lg:!leading-[150%] xl:text-[32px]">
                UnifiedAPI{' '}
                <span className="font-medium text-[#959595]">(PaaS)</span>
              </div>
              <div className="mt-[10px] text-[10px] font-medium lg:mt-[20px] lg:text-[14px] xl:text-[20px]">
                A single endpoint for all crypto and Web3 data, along with REST
                APIs for historical data as a service
              </div>
              <div className="mt-[10px] flex text-center lg:mt-[20px]">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.openmesh.network/academy#unified`}
                  className="cursor-pointer rounded-[5px] bg-[#0354EC] px-[18px] py-[9.5px]  text-[10px] font-bold text-white hover:bg-[#0447c5] lg:py-[11.5px] lg:px-[35px] lg:text-[12px] lg:!leading-[19px] xl:text-[16px]"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="mt-[45px] md:mt-0 lg:w-[294px]">
              <div className="h-full">
                <img
                  src={`${
                    process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                      ? process.env.NEXT_PUBLIC_BASE_PATH
                      : ''
                  }/images/techs/pythia-logo.svg`}
                  alt="image"
                  className={`mx-auto w-[100px]`}
                />
                <div className="justify-center text-center font-bold text-[#4A87FF]">
                  Decentralized dApps
                </div>
                <div className="justify-center text-center text-[#4A87FF]">
                  (as a service)
                </div>
                <div className="mx-auto mt-[10px] max-w-[250px] justify-center text-center text-[10px] font-bold !leading-[20px] lg:mt-[20px] lg:text-[14px] xl:text-[20px]">
                  Design, build, visualize, deploy powerful and web3 data
                  products
                </div>
                <img
                  src={`${
                    process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                      ? process.env.NEXT_PUBLIC_BASE_PATH
                      : ''
                  }/images/techs/pythia-dash.png`}
                  alt="image"
                  className={`mx-auto  mt-[10px] w-[400px]`}
                />
              </div>
              <div className="mt-[10px] text-[16px] font-bold lg:mt-[110px] lg:text-[23px] lg:!leading-[150%] xl:text-[32px]">
                Pythia{' '}
                <span className="font-medium text-[#959595]">(SaaS)</span>
              </div>
              <div className="mt-[10px] text-[10px] font-medium lg:mt-[20px] lg:text-[14px] xl:text-[20px]">
                Allows users to search, design, build, and store their own
                crypto and Web3 data directly within their wallet
              </div>
              <div className="mt-[10px] flex text-center lg:mt-[20px]">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.openmesh.network/academy#pythia`}
                  className="cursor-pointer rounded-[5px] bg-[#0354EC] px-[18px] py-[9.5px]  text-[10px] font-bold text-white hover:bg-[#0447c5] lg:py-[11.5px] lg:px-[35px] lg:text-[14px] lg:!leading-[19px] xl:text-[16px]"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-[41px] h-[1px] bg-[#D4D4D4] lg:mt-[82px]"></div>
    </>
  )
}

export default Hero2
