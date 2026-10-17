/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Image Editor: full-screen editor placeholder for media tools.
 */

import React from 'react';
import { ScreenHeader } from '../ScreenHeader';

interface ImageEditorScreenProps {
  onBack: () => void;
  onLogoClick?: () => void;
}

export const ImageEditorScreen: React.FC<ImageEditorScreenProps> = ({
  onBack,
  onLogoClick,
}) => {
  return (
    <div className="relative w-full h-full flex flex-col bg-[#121315] text-[#ECECEC] overflow-hidden select-none font-sans">
      <ScreenHeader
        title="Image Editor"
        tagline="IMAGE EDITOR"
        backLabel="MEDIA"
        collapsible
        onBack={onBack}
        onLogoClick={onLogoClick ?? (() => {})}
      />

      <div className="flex-1 flex items-center justify-center px-6 text-center">
        <p className="text-sm font-sans text-[#8E9094]">
          Image editor is coming soon.
        </p>
      </div>
    </div>
  );
};

export default ImageEditorScreen;
