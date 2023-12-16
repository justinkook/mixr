export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      account_user: {
        Row: {
          account_id: string
          account_role: Database['public']['Enums']['account_role']
          user_id: string
        }
        Insert: {
          account_id: string
          account_role: Database['public']['Enums']['account_role']
          user_id: string
        }
        Update: {
          account_id?: string
          account_role?: Database['public']['Enums']['account_role']
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'account_user_account_id_fkey'
            columns: ['account_id']
            isOneToOne: false
            referencedRelation: 'accounts'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'account_user_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
      accounts: {
        Row: {
          created_at: string | null
          id: string
          personal_account: boolean
          primary_owner_user_id: string
          team_name: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          personal_account?: boolean
          primary_owner_user_id?: string
          team_name?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          personal_account?: boolean
          primary_owner_user_id?: string
          team_name?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'accounts_primary_owner_user_id_fkey'
            columns: ['primary_owner_user_id']
            isOneToOne: false
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
      community: {
        Row: {
          archived_at: string | null
          avatar_url: string | null
          community_type: string | null
          cover_url: string | null
          created_at: string
          description: string | null
          fb_pixel_id: string | null
          geo_city: string | null
          geo_country: string | null
          geo_latitude: string | null
          geo_longitude: string | null
          geo_region: string | null
          id: number
          instagram_handle: string | null
          invite_only: boolean
          linkedin_handle: string | null
          name: string
          require_approval: boolean
          show_member_list: boolean
          slug: string | null
          social_image_url: string | null
          tiktok_handle: string | null
          timezone: string | null
          twitter_handle: string | null
          url: string | null
          user_id: string | null
          verified_at: string | null
          visibility: string | null
          waitlist_enabled: boolean
          website: string | null
          youtube_handle: string | null
        }
        Insert: {
          archived_at?: string | null
          avatar_url?: string | null
          community_type?: string | null
          cover_url?: string | null
          created_at?: string
          description?: string | null
          fb_pixel_id?: string | null
          geo_city?: string | null
          geo_country?: string | null
          geo_latitude?: string | null
          geo_longitude?: string | null
          geo_region?: string | null
          id?: number
          instagram_handle?: string | null
          invite_only?: boolean
          linkedin_handle?: string | null
          name: string
          require_approval?: boolean
          show_member_list?: boolean
          slug?: string | null
          social_image_url?: string | null
          tiktok_handle?: string | null
          timezone?: string | null
          twitter_handle?: string | null
          url?: string | null
          user_id?: string | null
          verified_at?: string | null
          visibility?: string | null
          waitlist_enabled?: boolean
          website?: string | null
          youtube_handle?: string | null
        }
        Update: {
          archived_at?: string | null
          avatar_url?: string | null
          community_type?: string | null
          cover_url?: string | null
          created_at?: string
          description?: string | null
          fb_pixel_id?: string | null
          geo_city?: string | null
          geo_country?: string | null
          geo_latitude?: string | null
          geo_longitude?: string | null
          geo_region?: string | null
          id?: number
          instagram_handle?: string | null
          invite_only?: boolean
          linkedin_handle?: string | null
          name?: string
          require_approval?: boolean
          show_member_list?: boolean
          slug?: string | null
          social_image_url?: string | null
          tiktok_handle?: string | null
          timezone?: string | null
          twitter_handle?: string | null
          url?: string | null
          user_id?: string | null
          verified_at?: string | null
          visibility?: string | null
          waitlist_enabled?: boolean
          website?: string | null
          youtube_handle?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'community_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
      customers: {
        Row: {
          id: string
          stripe_customer_id: string | null
        }
        Insert: {
          id: string
          stripe_customer_id?: string | null
        }
        Update: {
          id?: string
          stripe_customer_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'customers_id_fkey'
            columns: ['id']
            isOneToOne: true
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
      events: {
        Row: {
          allow_price_range: boolean
          community_id: number | null
          cover_url: string | null
          created_at: string
          creator_email_is_verified: boolean | null
          description: string | null
          duration_interval: string | null
          enable_tipping: boolean
          end_at: string | null
          event_type: string | null
          geo_address_info: Json | null
          geo_address_visibility: string | null
          geo_latitude: number | null
          geo_longitude: number | null
          hide_rsvp: boolean
          id: number
          is_capped: boolean
          location_type: string | null
          name: string | null
          require_approval: boolean
          require_rsvp_approval: boolean
          show_guest_list: boolean
          spots_remaining: number | null
          start_at: string | null
          ticket_currency: string | null
          timezone: string | null
          url: string
          user_id: string
          virtual_info: Json | null
          visibility: string | null
          waitlist_enabled: boolean
        }
        Insert: {
          allow_price_range?: boolean
          community_id?: number | null
          cover_url?: string | null
          created_at?: string
          creator_email_is_verified?: boolean | null
          description?: string | null
          duration_interval?: string | null
          enable_tipping?: boolean
          end_at?: string | null
          event_type?: string | null
          geo_address_info?: Json | null
          geo_address_visibility?: string | null
          geo_latitude?: number | null
          geo_longitude?: number | null
          hide_rsvp?: boolean
          id?: number
          is_capped?: boolean
          location_type?: string | null
          name?: string | null
          require_approval?: boolean
          require_rsvp_approval?: boolean
          show_guest_list?: boolean
          spots_remaining?: number | null
          start_at?: string | null
          ticket_currency?: string | null
          timezone?: string | null
          url: string
          user_id: string
          virtual_info?: Json | null
          visibility?: string | null
          waitlist_enabled?: boolean
        }
        Update: {
          allow_price_range?: boolean
          community_id?: number | null
          cover_url?: string | null
          created_at?: string
          creator_email_is_verified?: boolean | null
          description?: string | null
          duration_interval?: string | null
          enable_tipping?: boolean
          end_at?: string | null
          event_type?: string | null
          geo_address_info?: Json | null
          geo_address_visibility?: string | null
          geo_latitude?: number | null
          geo_longitude?: number | null
          hide_rsvp?: boolean
          id?: number
          is_capped?: boolean
          location_type?: string | null
          name?: string | null
          require_approval?: boolean
          require_rsvp_approval?: boolean
          show_guest_list?: boolean
          spots_remaining?: number | null
          start_at?: string | null
          ticket_currency?: string | null
          timezone?: string | null
          url?: string
          user_id?: string
          virtual_info?: Json | null
          visibility?: string | null
          waitlist_enabled?: boolean
        }
        Relationships: [
          {
            foreignKeyName: 'events_community_id_fkey'
            columns: ['community_id']
            isOneToOne: false
            referencedRelation: 'community'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'events_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
      likes: {
        Row: {
          created_at: string
          event_id: number
          user_id: string
        }
        Insert: {
          created_at?: string
          event_id: number
          user_id: string
        }
        Update: {
          created_at?: string
          event_id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'likes_event_id_fkey'
            columns: ['event_id']
            isOneToOne: false
            referencedRelation: 'events'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'likes_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
      prices: {
        Row: {
          active: boolean | null
          currency: string | null
          description: string | null
          id: string
          interval: Database['public']['Enums']['pricing_plan_interval'] | null
          interval_count: number | null
          metadata: Json | null
          product_id: string | null
          trial_period_days: number | null
          type: Database['public']['Enums']['pricing_type'] | null
          unit_amount: number | null
        }
        Insert: {
          active?: boolean | null
          currency?: string | null
          description?: string | null
          id: string
          interval?: Database['public']['Enums']['pricing_plan_interval'] | null
          interval_count?: number | null
          metadata?: Json | null
          product_id?: string | null
          trial_period_days?: number | null
          type?: Database['public']['Enums']['pricing_type'] | null
          unit_amount?: number | null
        }
        Update: {
          active?: boolean | null
          currency?: string | null
          description?: string | null
          id?: string
          interval?: Database['public']['Enums']['pricing_plan_interval'] | null
          interval_count?: number | null
          metadata?: Json | null
          product_id?: string | null
          trial_period_days?: number | null
          type?: Database['public']['Enums']['pricing_type'] | null
          unit_amount?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'prices_product_id_fkey'
            columns: ['product_id']
            isOneToOne: false
            referencedRelation: 'products'
            referencedColumns: ['id']
          },
        ]
      }
      products: {
        Row: {
          active: boolean | null
          description: string | null
          id: string
          image: string | null
          metadata: Json | null
          name: string | null
        }
        Insert: {
          active?: boolean | null
          description?: string | null
          id: string
          image?: string | null
          metadata?: Json | null
          name?: string | null
        }
        Update: {
          active?: boolean | null
          description?: string | null
          id?: string
          image?: string | null
          metadata?: Json | null
          name?: string | null
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          cancel_at: string | null
          cancel_at_period_end: boolean | null
          canceled_at: string | null
          created: string
          current_period_end: string
          current_period_start: string
          ended_at: string | null
          id: string
          metadata: Json | null
          price_id: string | null
          quantity: number | null
          status: Database['public']['Enums']['subscription_status'] | null
          trial_end: string | null
          trial_start: string | null
          user_id: string
        }
        Insert: {
          cancel_at?: string | null
          cancel_at_period_end?: boolean | null
          canceled_at?: string | null
          created?: string
          current_period_end?: string
          current_period_start?: string
          ended_at?: string | null
          id: string
          metadata?: Json | null
          price_id?: string | null
          quantity?: number | null
          status?: Database['public']['Enums']['subscription_status'] | null
          trial_end?: string | null
          trial_start?: string | null
          user_id: string
        }
        Update: {
          cancel_at?: string | null
          cancel_at_period_end?: boolean | null
          canceled_at?: string | null
          created?: string
          current_period_end?: string
          current_period_start?: string
          ended_at?: string | null
          id?: string
          metadata?: Json | null
          price_id?: string | null
          quantity?: number | null
          status?: Database['public']['Enums']['subscription_status'] | null
          trial_end?: string | null
          trial_start?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'subscriptions_price_id_fkey'
            columns: ['price_id']
            isOneToOne: false
            referencedRelation: 'prices'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'subscriptions_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
      tickets: {
        Row: {
          approval_status: string | null
          created_at: string
          email: string
          id: number
          is_paid: boolean | null
          name: string | null
          ticket_key: string | null
          ticket_type: string | null
        }
        Insert: {
          approval_status?: string | null
          created_at?: string
          email: string
          id?: number
          is_paid?: boolean | null
          name?: string | null
          ticket_key?: string | null
          ticket_type?: string | null
        }
        Update: {
          approval_status?: string | null
          created_at?: string
          email?: string
          id?: number
          is_paid?: boolean | null
          name?: string | null
          ticket_key?: string | null
          ticket_type?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          avatar_url: string | null
          billing_address: Json | null
          bio_short: string | null
          default_currency: string | null
          enable_tipping: string
          full_name: string | null
          id: string
          instagram_handle: string | null
          is_manager: boolean | null
          is_visible: boolean
          linkedin_handle: string | null
          payment_method: Json | null
          social_image_url: string | null
          tiktok_handle: string | null
          twitter_handle: string | null
          url: string | null
          username: string | null
          website: string | null
          youtube_handle: string | null
        }
        Insert: {
          avatar_url?: string | null
          billing_address?: Json | null
          bio_short?: string | null
          default_currency?: string | null
          enable_tipping?: string
          full_name?: string | null
          id: string
          instagram_handle?: string | null
          is_manager?: boolean | null
          is_visible?: boolean
          linkedin_handle?: string | null
          payment_method?: Json | null
          social_image_url?: string | null
          tiktok_handle?: string | null
          twitter_handle?: string | null
          url?: string | null
          username?: string | null
          website?: string | null
          youtube_handle?: string | null
        }
        Update: {
          avatar_url?: string | null
          billing_address?: Json | null
          bio_short?: string | null
          default_currency?: string | null
          enable_tipping?: string
          full_name?: string | null
          id?: string
          instagram_handle?: string | null
          is_manager?: boolean | null
          is_visible?: boolean
          linkedin_handle?: string | null
          payment_method?: Json | null
          social_image_url?: string | null
          tiktok_handle?: string | null
          twitter_handle?: string | null
          url?: string | null
          username?: string | null
          website?: string | null
          youtube_handle?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'users_id_fkey'
            columns: ['id']
            isOneToOne: true
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      current_user_account_role: {
        Args: {
          lookup_account_id: string
        }
        Returns: Json
      }
      get_service_role_config: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      requesting_user_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      update_account_user_role: {
        Args: {
          account_id: string
          user_id: string
          new_account_role: Database['public']['Enums']['account_role']
          make_primary_owner: boolean
        }
        Returns: undefined
      }
    }
    Enums: {
      account_role: 'owner' | 'member'
      pricing_plan_interval: 'day' | 'week' | 'month' | 'year'
      pricing_type: 'one_time' | 'recurring'
      subscription_status:
        | 'trialing'
        | 'active'
        | 'canceled'
        | 'incomplete'
        | 'incomplete_expired'
        | 'past_due'
        | 'unpaid'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
