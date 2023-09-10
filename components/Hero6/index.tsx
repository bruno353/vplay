const Hero6 = () => {
  return (
    <>
      <section
        id="cta"
        className="relative z-10 overflow-hidden border-b-[1px] border-[#D4D4D4] bg-white px-[60px] pb-[65px] pt-[42px] text-[#000000] lg:pb-[129px] lg:pt-[84px]"
      >
        <div className="mx-auto">
          <div className="flex justify-center text-center  text-[32px] font-bold -tracking-[2%] lg:text-[48px] lg:!leading-[77px] xl:text-[64px]">
            What are you waiting for?
          </div>
          <div className="mx-auto mt-[20px] flex justify-center text-center text-[14px] font-medium -tracking-[2%] text-[#959595] lg:mt-[40px] lg:text-[19px] lg:!leading-[34px] xl:max-w-[1074px] xl:text-[28px]">
            If you are an individual or a team who have the expertise of data
            and Web3 infrastructure, we invite you to apply to become our
            official OpenMesh Expert
          </div>
          <div className="mx-auto mt-[52px] max-w-[1200px] md:mt-[104px] md:flex">
            <div className="flex-1 md:mr-[70px]  lg:mr-[60px]">
              <img
                src={`${
                  process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                    ? process.env.NEXT_PUBLIC_BASE_PATH
                    : ''
                }/images/hero3/man.svg`}
                alt="image"
                className={`w-full`}
              />
              <div className="mx-auto mt-[16px] flex w-[240px] justify-center text-[14px] font-bold lg:mt-[33px] lg:w-fit lg:text-[19px] lg:!leading-[150%] xl:text-[28px]">
                Individual Expert
              </div>
            </div>

            <div className="flex-1">
              <img
                src={`${
                  process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                    ? process.env.NEXT_PUBLIC_BASE_PATH
                    : ''
                }/images/hero6/people.png`}
                alt="image"
                className={`mt-[30px] w-full  md:mt-0`}
              />
              <div className="mx-auto mt-[16px] flex w-[240px] justify-center text-[14px] font-bold lg:mt-[33px] lg:w-fit lg:text-[19px] lg:!leading-[150%] xl:text-[28px]">
                Blockchain Consulting Team
              </div>
            </div>
          </div>
          <div className="mt-[32px] flex justify-center text-center lg:mt-[62px]">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://calendly.com/`}
              className="cursor-pointer rounded-[5px] bg-[#0354EC] px-[18px] py-[9.5px] text-[11px] font-bold text-white hover:bg-[#0447c5] lg:py-[11.5px] lg:px-[35px] lg:!leading-[19px] xl:text-[16px]"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero6
