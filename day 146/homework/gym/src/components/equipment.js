import React from 'react';

function Equipment() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', padding: '20px' }}>
      <div style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '10px' }}>
        <img src="https://example.com/dumbbell.jpg" alt="დამბელი" style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px' }} />
        <h2>დამბელი</h2>
        <p>წონა: 10 კგ</p>
      </div>

      <div style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '10px' }}>
        <img src="https://example.com/barbell.jpg" alt="ბარბელი" style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px' }} />
        <h2>ბარბელი</h2>
        <p>წონა: 20 კგ</p>
      </div>

      <div style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '10px' }}>
        <img src="https://example.com/medicine-ball.jpg" alt="რბილი ბურთი" style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px' }} />
        <h2>რბილი ბურთი</h2>
        <p>წონა: 5 კგ</p>
      </div>

      <div style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '10px' }}>
        <img src="https://example.com/jump-rope.jpg" alt="თოკი" style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px' }} />
        <h2>თოკი გადახტომისთვის</h2>
        <p>წონა: -</p>
      </div>
    </div>
  );
}

export default Equipment;