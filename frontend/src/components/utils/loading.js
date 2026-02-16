const Loading = () => {
  return (
    <div className="skeleton-shell" style={{ width: '100%', padding: '18px', minHeight: '220px' }}>
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          style={{
            height: i === 0 ? '18px' : '72px',
            marginBottom: '12px',
            borderRadius: '14px',
            background: 'linear-gradient(90deg, var(--surface-muted) 25%, var(--hover-bg) 50%, var(--surface-muted) 75%)',
            backgroundSize: '420px 100%',
            animation: 'shimmer 1.35s infinite linear'
          }}
        />
      ))}
      <small style={{ color: 'var(--text-muted)' }}>Loading data...</small>
    </div>
  );
};

export default Loading;
