import Separator from "@/components/separator";
import { Pencil } from "lucide-react";
import Image from "next/image";
import { FeatureCard, FeatureCardTwo } from "./components/feature-card";

export default function Home() {
  return (
    <div className="page-container font-optima">
      <h2 className="text-base text-midGrey">
        Hi Yumi, <br /> Welcome to Ownleaf for Bethnal Green Ventures
      </h2>
      <Separator className="my-[26px]" />

      <section>
        <FeatureCard
          title="Bereavement Policy"
          description="Set a policy, view examples and share drafts"
          imageSrc="/fancy-plant.png"
          buttonText="Create New Policy"
          heading="Bereavement Policy"
          className="bg-banner"
          Icon={<Pencil size={16} />}
        />
      </section>

      <Separator className="my-[26px]" />

      <section>
        <FeatureCard
          title="Immediate help"
          description="Receive support for a death or grief in your company"
          imageSrc="/charco.png"
          className="border border-borderGrey"
          heading="24/7 Support"
          buttonText="Get immediate Help"
        />
      </section>

      <Separator className="my-[26px]" />

      <section>
        <h3 className="subheading pb-[19px]">
          HR & Management <br /> resources
        </h3>

        <FeatureCardTwo
          imageSrc="/mask.png"
          imageAlt="mask-group"
          title="Developing A Bereavement Policy for Your Workplace"
        />

        <Separator className="my-[26px]" />

        <FeatureCardTwo
          imageSrc="/work.png"
          imageAlt="work"
          title="Line managers' guide to providing effective grief support"
          className="mt-8"
        />

        <Separator className="my-[26px]" />

        <FeatureCardTwo imageSrc="/pick.png" imageAlt="pick" />
      </section>
    </div>
  );
}
