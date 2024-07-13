export default function HackathonTimeline() {
  return (
    <ul className="mb-4 lg:ml-4 divide-y divide-dotted border-l">
      <li className="relative ml-10 py-4">
        <div className="flex flex-1 flex-col justify-start gap-0.5">
          <time className="text-xs text-gray-500 underline">June, 2024</time>
          <h2 className="font-semibold leading-none">HackFS</h2>
          <p className="text-sm text-gray-500 underline">Remote, Online</p>
          <div className="prose dark:prose-invert text-sm text-muted-foreground">
            <p>
              We built a decentralised hub for federated model training on
              access controlled private datasets. This lead us to win bounties
              in best tooling and innovation categories.
            </p>
          </div>
        </div>
      </li>
      <li className="relative ml-10 py-4">
        <div className="flex flex-1 flex-col justify-start gap-0.5">
          <time className="text-xs text-gray-500 underline">May, 2024</time>
          <h2 className="font-semibold leading-none">HackBangalore</h2>
          <p className="text-sm text-gray-500 underline">Bangalore, India</p>
          <div className="prose dark:prose-invert text-sm text-muted-foreground">
            <p>
              As part of the financial inclusion track, I built an AI powered
              loan application and approval automation platform. In addition to
              this, I implemented a recommendation system that suggests
              compatible government schemes that are benificial to the
              applicants.
            </p>
          </div>
        </div>
      </li>
      <li className="relative ml-10 py-4">
        <div className="flex flex-1 flex-col justify-start gap-0.5">
          <time className="text-xs text-gray-500 underline">
            December, 2023
          </time>
          <h2 className="font-semibold leading-none">ETH India</h2>
          <p className="text-sm text-gray-500 underline">Bangalore, India</p>
          <div className="prose dark:prose-invert text-sm text-muted-foreground">
            <p>
              Built Harveeco, a product which aims to improve the lives of
              Indian farmers by leveraging the power of Web3 technologies,
              Machine Learning, and the Internet of Things (IoT). 💫
            </p>
          </div>
        </div>
      </li>
      <li className="relative ml-10 py-4">
        <div className="flex flex-1 flex-col justify-start gap-0.5">
          <time className="text-xs text-gray-500 underline">October, 2023</time>
          <h2 className="font-semibold leading-none">ETH Online</h2>
          <p className="text-sm text-gray-500 underline">Remote, Online</p>
          <div className="prose dark:prose-invert text-sm text-muted-foreground">
            <p>
              Developed a decentralised annotation platform that won the track
              prize for best use of Sismo and Tableland.
            </p>
          </div>
        </div>
      </li>
      <li className="relative ml-10 py-4">
        <div className="flex flex-1 flex-col justify-start gap-0.5">
          <time className="text-xs text-gray-500 underline">
            September, 2023
          </time>
          <h2 className="font-semibold leading-none">Manipal Hackathon</h2>
          <p className="text-sm text-gray-500 underline">Manipal, India</p>
          <div className="prose dark:prose-invert text-sm text-muted-foreground">
            <p>
              A comprehensive mental onset detection system tailored for the
              needs of universities and colleges with a focus on the mental
              health of students.
            </p>
          </div>
        </div>
      </li>
    </ul>
  );
}
