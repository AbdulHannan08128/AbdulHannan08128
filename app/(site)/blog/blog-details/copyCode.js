'use client';

import React, { useEffect } from 'react';

const CopyCode = () => {
  useEffect(() => {
    const handleCopy = async (event) => {
      const wrapper = event.target.closest('.code-wrapper');
      if (!wrapper) return;
      
      const codeBlock = wrapper.querySelector('code');
      if (!codeBlock) return;
      
      try {
        const text = codeBlock.textContent.replace('Copy', '').replace('Copied!', '').trim();
        await navigator.clipboard.writeText(text);
        
        // Get or create indicator
        let indicator = wrapper.querySelector('.copy-indicator');
        if (!indicator) {
          indicator = document.createElement('div');
          indicator.className = 'copy-indicator';
          indicator.textContent = 'Copy';
          wrapper.appendChild(indicator);
        }

        // Show copied state
        indicator.textContent = 'Copied!';
        indicator.classList.add('copied');

        // Reset after delay
        setTimeout(() => {
          indicator.textContent = 'Copy';
          indicator.classList.remove('copied');
        }, 2000);
        
      } catch (error) {
        console.error('Failed to copy:', error);
      }
    };

    // Wrap code blocks and add copy indicators
    const codeBlocks = document.querySelectorAll('.blog-details code');
    codeBlocks.forEach((codeBlock) => {
      // Create wrapper if it doesn't exist
      if (!codeBlock.parentElement.classList.contains('code-wrapper')) {
        const wrapper = document.createElement('div');
        wrapper.className = 'code-wrapper';
        codeBlock.parentNode.insertBefore(wrapper, codeBlock);
        wrapper.appendChild(codeBlock);
      }
      
      // Add copy indicator if it doesn't exist
      const wrapper = codeBlock.parentElement;
      if (!wrapper.querySelector('.copy-indicator')) {
        const indicator = document.createElement('div');
        indicator.className = 'copy-indicator';
        indicator.textContent = 'Copy';
        wrapper.appendChild(indicator);
      }
      
      // Add click listeners to both code block and copy indicator
      codeBlock.addEventListener('click', handleCopy);
      wrapper.querySelector('.copy-indicator').addEventListener('click', handleCopy);
    });

    return () => {
      codeBlocks.forEach((codeBlock) => {
        const wrapper = codeBlock.parentElement;
        codeBlock.removeEventListener('click', handleCopy);
        const indicator = wrapper.querySelector('.copy-indicator');
        if (indicator) {
          indicator.removeEventListener('click', handleCopy);
        }
      });
    };
  }, []);

  return null;
};

export default CopyCode;
