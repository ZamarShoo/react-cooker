export const Textarea = ({ label, title, register, required }) => (
    <label>
      <span>{title}</span>
      <textarea {...register(label, { required })} />
    </label>
);