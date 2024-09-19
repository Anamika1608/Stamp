import React, { useState } from 'react';
import axios from 'axios';

function Generate() {
    const [prompt, setPrompt] = useState('');
    const [imageSrc, setImageSrc] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const generateImage = async (p) => {
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append('prompt', p);
            formData.append('output_format', 'webp');

            const response = await axios.post(
                'https://api.stability.ai/v2beta/stable-image/generate/ultra',
                formData,
                {
                    responseType: 'arraybuffer',
                    headers: {
                        Authorization: `Bearer sk-ubnw9HlXBKh1dyxgv7ZNxyd2jxPonCrJq7ORiQwtBsQ9Gger`, 
                        Accept: 'image/*',
                    },
                }
            );

            if (response.status === 200) {
                const blob = new Blob([response.data], { type: 'image/webp' });
                const imageURL = URL.createObjectURL(blob);
                setImageSrc(imageURL);
                setError(null);
            } else {
                throw new Error(`${response.status}: ${response.data.toString()}`);
            }
        } catch (err) {
            console.log(err);
            setError(err.message);
            setImageSrc(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center p-20 bg-gray-100">
            <div className="rounded-lg p-8 w-full max-w-4xl flex space-x-10">
            
                <div className="w-1/2 bg-[#dbd7a4] p-10 rounded-2xl">
                    <h2 className="text-2xl font-bold mb-4 ibm-plex-mono-medium ">Describe Your Stamp</h2>

                    <textarea
                        value={prompt}
                        name="prompt"
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Describe your Image..."
                        className="w-full p-4 text-gray-700 border rounded-md mb-4 h-28 focus:outline-none focus:ring-2 focus:ring-black"
                    />

                    <button
                        onClick={() => generateImage(prompt)}
                        className="px-6 py-3 bg-[#806D3A] text-white font-semibold rounded-md hover:bg-[#7D6043] transition duration-300"
                        disabled={loading || !prompt.trim()}
                    >
                        {loading ? 'Creating...' : 'Create'}
                    </button>

                    {loading && (
                        <div className="mt-4 text-[#4C1F1F] text-lg">
                            Hang on! We're creating your custom stamp...
                        </div>
                    )}

                    {error && (
                        <div className="text-red-500 mt-4">
                            Error: {error}
                        </div>
                    )}
                </div>

                <div className="w-1/2 flex items-center justify-center">
                    {imageSrc ? (
                        <img src={imageSrc} alt="Generated" className="w-full max-w-md rounded-md shadow-md" />
                    ) : (
                        <div className="text-gray-500">Your generated image will appear here</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Generate;
