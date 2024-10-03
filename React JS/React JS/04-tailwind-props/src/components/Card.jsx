function Card({ headline }) {
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{headline}</h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step-by-step guideline process on how to certify for your weekly benefits:</p>
            <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">See our guideline</a>
        </div>
    );
}

export default Card;
