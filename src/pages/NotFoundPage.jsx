import Button from '../components/ui/Button.jsx';

export default function NotFoundPage() {
  return (
    <section className="section page-offset">
      <div className="container narrow-section centered-state">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>The page you were looking for does not exist.</p>
        <Button to="/" variant="primary">Go Home</Button>
      </div>
    </section>
  );
}
