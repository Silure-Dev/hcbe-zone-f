export default function Members({ roles }) {
  return (
    <div className="members">
      {roles.map((role, i) => (
        <div key={i} className="member-card">
          <img src={`/members/member${i + 1}.jpg`} />
          <h3>Member {i + 1}</h3>
          <p>{role}</p>
        </div>
      ))}
    </div>
  );
}
