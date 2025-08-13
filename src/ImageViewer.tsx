import React, { useState } from 'react';

/**
 * Defines the properties for the ImageViewer component.
 */
interface ImageViewerProps {
    imageUrl: string;
    altText: string;
    }

/**
 * A React component that displays an image with loading and error handling.
 * 
 * @param {ImageViewerProps} props - The properties for the ImageViewer component.
 * @param {string} props.imageUrl - The URL of the image to display.
 * @param {string} props.altText - The alt text for the image.
 * @returns {React.ReactElement} The ImageViewer component.
 */
    export const ImageViewer: React.FC<ImageViewerProps> = ({ imageUrl, altText }) => {
        // State to track whether the image is loading.
        const [isLoading, setIsLoading] = useState(true);
        // State to track if there was an error loading the image.
        const [hasError, setHasError] = useState(false);

        return (
            <div className="image-viewer-container">
                {/* if isLoading is true, show a loading spinner. */}
                {isLoading && <div className="loading-spinner">Loading...</div>}

                {/* if hasError is true, show an error message. */}
                {hasError && <div className="error-message">Error loading image.</div>}

                <img 
                    src={imageUrl}
                    alt={altText}
                    // onLoad event handler is fired once the image is loaded. Update isLoading to false.
                    onLoad={() => setIsLoading(false)}
                    // onError event handler is fired if there is an error loading the image. Update isLoading to false and hasError to true.
                    onError={() => {
                        setIsLoading(false);
                        setHasError(true);
                    }}
                    // Hides the image element if isLoading or hasError is true.
                    style={{ display: isLoading || hasError ? 'none' : 'block' }}
                />
            </div>
        );
    };

    
