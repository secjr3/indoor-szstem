import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bccwtclrrptrvjiacqyf.supabase.co/rest/v1/";
const supabaseKey = "sb_publishable_-8bqN0pfzyqrKgHv6dqbRQ_sDzzDDkL";

export const supabase = createClient(
    supabaseUrl,
    supabaseKey
);