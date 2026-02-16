function Info({ text }) {
  return (
    <div
      className="info-state fade-in"
      style={{
        width: '100%',
        minHeight: '240px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-muted)',
        fontWeight: 600,
        padding: '16px'
      }}
    >
      {text}
    </div>
  );
}

export default Info;
