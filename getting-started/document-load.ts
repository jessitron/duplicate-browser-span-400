/* document-load.ts|js file - the code snippet is the same for both the languages */
import { ConsoleSpanExporter, SimpleSpanProcessor, WebTracerProvider } from "@opentelemetry/sdk-trace-web";
import { DocumentLoadInstrumentation } from "@opentelemetry/instrumentation-document-load";
import { ZoneContextManager } from "@opentelemetry/context-zone";
import { registerInstrumentations } from "@opentelemetry/instrumentation";
import { trace } from "@opentelemetry/api";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";

const provider = new WebTracerProvider();

const reasonableTraceExporter = new OTLPTraceExporter({
  // optional - default url is http://localhost:4318/v1/traces
  url: "https://api.honeycomb.io/v1/traces",
  // optional - collection of custom headers to be sent with each request, empty by default
  headers: { "X-Honeycomb-Team": "HONEYCOMB_API_KEY goes here" },
});
provider.addSpanProcessor(new SimpleSpanProcessor(reasonableTraceExporter));
provider.register({
  // Changing default contextManager to use ZoneContextManager - supports asynchronous operations - optional
  contextManager: new ZoneContextManager(),
});

// Registering instrumentations
registerInstrumentations({
  //instrumentations: [new DocumentLoadInstrumentation()],
});

const span = trace.getTracer("foo").startSpan("bar");
console.log(span.spanContext());
span.end();
