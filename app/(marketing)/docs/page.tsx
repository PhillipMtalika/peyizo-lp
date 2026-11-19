import { redirect } from "next/navigation";

/** Legacy URL kept as a redirect for links created before the account guide. */
export default function DocsPage() {
  redirect("/guide");
}
