export const Input = ({ label, title, register, required }) => (
    <label>
      <span>{title}</span>
      <input {...register(label, { required })} />
    </label>
);