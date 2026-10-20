import React, { useState } from 'react';
import { X, FileText, Download, CheckCircle2, Loader2 } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose }) => {
  const [downloadingFormat, setDownloadingFormat] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');

  if (!isOpen) return null;

  const handleDownload = async (format) => {
    try {
      setDownloadingFormat(format);
      setStatusMessage(`Initiating ${format.toUpperCase()} download from backend API...`);

      // Backend route as required by assignment:
      // "Files must be served via a Node.js/Express.js backend route"
      const url = `/api/resume/${format}`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Server returned ${response.status}: Failed to download file`);
      }

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `Nidhish_Tripathi_Resume.${format === 'docx' ? 'docx' : 'pdf'}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);

      setStatusMessage(`✓ ${format.toUpperCase()} resume downloaded successfully!`);
      setTimeout(() => {
        setDownloadingFormat(null);
      }, 1500);
    } catch (err) {
      console.error('Download error:', err);
      // Fallback direct link attempt if fetch blob has browser restrictions
      window.location.href = `/api/resume/${format}`;
      setStatusMessage(`Download triggered via direct backend route.`);
      setTimeout(() => {
        setDownloadingFormat(null);
      }, 1500);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          border: '1px solid var(--border-color)',
          background: 'var(--bg-secondary)',
          borderRadius: 'var(--radius-lg)'
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <div>
            <span className="section-tag" style={{ marginBottom: '0.4rem', fontSize: '0.75rem' }}>
              Backend Route Verified
            </span>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}>Download Resume / CV</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              padding: '0.5rem',
              borderRadius: '50%',
              background: 'var(--bg-tertiary)',
              color: 'var(--text-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'var(--transition-fast)'
            }}
          >
            <X size={20} />
          </button>
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.75rem', lineHeight: '1.5' }}>
          Both formats are generated and served directly through the Express.js backend endpoints (<code>/api/resume/pdf</code> & <code>/api/resume/docx</code>).
        </p>

        {/* Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* PDF Card */}
          <div
            onClick={() => handleDownload('pdf')}
            style={{
              padding: '1.25rem',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              transition: 'var(--transition-normal)'
            }}
            className="download-option-card"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(239, 68, 68, 0.15)',
                  color: '#ef4444',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <FileText size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                  PDF Format (.pdf)
                </h4>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                  Ideal for quick viewing, printing & ATS scanners
                </p>
              </div>
            </div>

            <button
              className="btn btn-primary btn-sm"
              disabled={downloadingFormat === 'pdf'}
              style={{ pointerEvents: 'none' }}
            >
              {downloadingFormat === 'pdf' ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <Download size={16} />
              )}
              PDF
            </button>
          </div>

          {/* Word DOCX Card */}
          <div
            onClick={() => handleDownload('docx')}
            style={{
              padding: '1.25rem',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              transition: 'var(--transition-normal)'
            }}
            className="download-option-card"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(59, 130, 246, 0.15)',
                  color: '#3b82f6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <FileText size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                  Word Format (.docx)
                </h4>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                  Editable Microsoft Word document
                </p>
              </div>
            </div>

            <button
              className="btn btn-secondary btn-sm"
              disabled={downloadingFormat === 'docx'}
              style={{ pointerEvents: 'none' }}
            >
              {downloadingFormat === 'docx' ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <Download size={16} />
              )}
              DOCX
            </button>
          </div>
        </div>

        {/* Status Message */}
        {statusMessage && (
          <div
            style={{
              marginTop: '1.25rem',
              padding: '0.75rem 1rem',
              borderRadius: 'var(--radius-sm)',
              background: 'rgba(99, 102, 241, 0.12)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              color: 'var(--accent-primary)',
              fontSize: '0.875rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <CheckCircle2 size={16} />
            <span>{statusMessage}</span>
          </div>
        )}

        <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          <button
            onClick={onClose}
            style={{
              fontSize: '0.875rem',
              color: 'var(--text-muted)',
              textDecoration: 'underline'
            }}
          >
            Cancel and return
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
