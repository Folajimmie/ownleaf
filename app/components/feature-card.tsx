import React from "react";
import Image from "next/image";

interface FeatureCardProps {
  title: string;
  heading: string;
  description: string;
  imageSrc: string;
  buttonText: string;
  className?: string;
  Icon?: React.ReactNode;
}

interface FeatureCardTwoProps {
  imageSrc: string;
  imageAlt: string;
  title?: string;
  className?: string; 
}

export const FeatureCard = ({
  title,
  heading,
  description,
  imageSrc,
  buttonText,
  className = "",
  Icon,
}: FeatureCardProps) => {
  return (
    <section>
      <h3 className="subheading pb-[19px] font-inter">{title}</h3>
      <p className="base pb-[26px]">{description}</p>

      <div className="cursor-pointer hover:border hover:border-selectBlue hover:rounded-md">
        <div className={`flex justify-center rounded-t-md py-4 ${className}`}>
          <Image src={imageSrc} width={160} height={160} alt={title} />
        </div>
        <div className="bg-primary hover:bg-selectBlue flex flex-col justify-center items-center space-y-[24px] px-[23px] py-[22px] text-white rounded-b-md">
          <p className="text-base">{heading}</p>
          <div className="flex space-x-2 px-[16px] py-[10px] rounded-md border">
            {Icon && Icon}
            <p className="text-buttonText font-inter">{buttonText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FeatureCardTwo = ({
  imageSrc,
  imageAlt,
  title,
  className,
}: FeatureCardTwoProps) => {
  return (
    <div className={`w-full ${className}`}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={160}
        height={160}
        className="w-full rounded-md h-auto"
      />
          <h2 className="base mt-4 hover:underline
       cursor-pointer">{title}</h2>
    </div>
  );
};

